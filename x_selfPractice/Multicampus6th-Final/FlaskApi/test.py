import pandas as pd
import numpy as np
import csv
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import HashingVectorizer
from sklearn.metrics.pairwise import linear_kernel
from nltk import word_tokenize

data = pd.read_csv('crawling_200407.csv')
ingre = data['ingre_main_oneline']
ingre = np.array(ingre.tolist())
#load model
with open('hv.pkl', 'rb') as f:
    X = pickle.load(f)


vectorize = HashingVectorizer(
    #tokenizer=word_tokenize
)

def recommend(ingre_input,main):
    srch_vector = vectorize.transform([ingre_input])
    cosine_similar = linear_kernel(srch_vector, X).flatten()
    rank_idx = cosine_similar.argsort()[::-1]
    count = 0
    idx_filtering=[]
    for i in rank_idx:
        if cosine_similar[i] > 0:
            if main in ingre[i]:
                #ingre_for_cv.append(ingre[i])
                idx_filtering.append(i)
                count+=1
                if count>100:
                    break
                    
    df = pd.DataFrame(ingre[idx_filtering],columns=['ingre'])
    df['idx_filtering']=idx_filtering
    df['calc'] = 0.
  
    ingre_for_cv = df['ingre'].tolist()
    ingre_for_cv.append(ingre_input)
    
    vect = CountVectorizer(min_df=0,tokenizer=lambda x:x.split())
    vect.fit(ingre_for_cv)
    cv=vect.transform(ingre_for_cv).toarray()
    #print(vect.get_feature_names())
    for idx, val in enumerate(cv[0:-1]):
        df['calc'][idx]=(val*cv[-1]).sum()/val.sum()
        #print(idx, (val*cv[-1]).sum()/val.sum())
        
    df = df.sort_values(by=['calc'], axis=0, ascending=False)
    df = df.reset_index(drop=True)
    
    return df
  
#df=recommend('대파 양파 돼지고기 계란 고추','돼지고기')
df=recommend('대파 양파 돼지고기 계란 고추 감자','돼지고기')
for index , i in enumerate(data.iloc[df['idx_filtering'][0]]):
    if i!='':
        print(index ,":",i)