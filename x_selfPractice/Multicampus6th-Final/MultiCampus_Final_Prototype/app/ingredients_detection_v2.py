import torch
from torchvision import transforms
from matplotlib import patches
import matplotlib.pyplot as plt
from detecto import core, utils, visualize
from skimage import io

def detect_ingredients(image, boxes, labels=None):
    plt.rcParams.update({'font.size': 14})
    fig, ax = plt.subplots(figsize=(20, 10))
    fig.patch.set_visible(False)
    ax.axis('off')

    # If the image is already a tensor, convert it back to a PILImage and reverse normalize it
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
        rect = patches.Rectangle(initial_pos, width, height, linewidth=2, edgecolor='cyan', facecolor='none')
        if labels:
            ax.text(box[0], box[1] - 10, '{}'.format(labels[i]), color='black')
        ax.add_patch(rect)
    fig.savefig('detection_result.jpg', dpi=100)



model_labels = ['chilli', 'egg', 'pork meat', 'potato', 'pa', 'onion']
model = core.Model.load('detection_weights.pth', model_labels)

image = io.imread('./data/test_image_02.jpg')
predictions = model.predict_top(image)
labels, boxes, scores = predictions

detection_class = labels

detect_ingredients(image, boxes, labels)
