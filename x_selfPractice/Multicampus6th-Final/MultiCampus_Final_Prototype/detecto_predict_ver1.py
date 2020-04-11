import torch
import torchvision
import matplotlib.pyplot as plt
import matplotlib.patches as patches

from torchvision import transforms
from detecto import core, utils, visualize

## visualize에 있는 show_labeled_image 함수를 프로젝트 사용 목적에 맞게 customizing
def show_labeled_image(image, boxes, labels=None):    

    fig, ax = plt.subplots(1)

    ## result image 사이즈를 크게 조정
    plt.rcParams.update({'font.size': 22})
    fig.set_size_inches(30, 20)
    
    # If the image is already a tensor, convert it back to a PILImage
    # and reverse normalize it
    if isinstance(image, torch.Tensor):
        image = reverse_normalize(image)
        image = transforms.ToPILImage()(image)
    ax.imshow(image)

    # Show a single box or multiple if provided
    if boxes.ndim == 1:
        boxes = boxes.view(1, 4)

    if labels is not None and not utils._is_iterable(labels):
        labels = [labels]

    # Plot each box
    for i in range(boxes.shape[0]):
        box = boxes[i]
        width, height = (box[2] - box[0]).item(), (box[3] - box[1]).item()
        initial_pos = (box[0].item(), box[1].item())
        rect = patches.Rectangle(initial_pos,  width, height, linewidth=1,
                                 edgecolor='r', facecolor='none')
        if labels:
            ax.text(box[0] + 5, box[1] - 5, '{}'.format(labels[i]), color='red')

        ax.add_patch(rect)

    plt.show()

    # detecting 결과 이미지를 현재 작업 디렉토리에 저장
    fig.savefig('result.png', dpi=100)
    plt.close(fig)

labels = ['chilli', 'egg', 'pork meat', 'potato', 'pa', 'onion']
model = core.Model.load('ingredients_weights_ver01_0326.pth', labels)

image = utils.read_image('test/test_image_02.jpg') # prediction할 이미지의 경로 입력해야함
predictions = model.predict(image)
labels, boxes, scores = predictions

## 'result.png'로 저장됨
show_labeled_image(image, boxes, labels)
# 이미지에서 검출된 label 정보(list type)
detection_class=list(set(labels))