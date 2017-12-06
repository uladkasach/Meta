# Classification of Words by Semantic Subject

This project was conducted under the supervision of [Dr. Dundar][dundar_homepage] as an Independent Study project during the spring semester of 2017.

What originally was planned to be a project with scope covering crawling the web for content about plant care (text classification) and automatic summarization was soon reduced to simply a different approach to text classification.

This research explored the usage of word embeddings in predicting whether a word was of a particular subject or not; the idea was that this information could later be used as a feature in text classification.  

The code for this project can be found at the following repository: [github.com/uladkasach/Word-Subject-Classification][codebase]

## Non-Published Paper

A fairly extensive summary of the conclusions of this project can be found in the non published paper written for it:
[Semi-Supervised Labeling and Classification of Words by Semantic Subject][paper]

[![pdf_preview][SSR_Preview]][paper]



## Overview

The project explored usage of both custom trained and pretrained wordvectors, utilizing Tensorflow to implement a word2vec algorithm. It was found that word2vec required substantially more data than what was availible for training on and that pretrained word vectors, such as the GoogleNews vectors, produced much better results.

Here is a TSNE plot of word vectors trained on 12.5 million words (click it and zoom in to see the semantic relationships encoded by word2vec):
![reference_image][tsne_words]

The goal was to train a classifier which could predict whether a word was of a particular subject or not. In order to do this an extensive labeled dataset of subject related words was required. Since manually labeling 10k words was not feasible an approach of utilizing seed words and incrementally tuning the labeled dataset was utilized.

A machine learning pipeline was created which facilitated conducting a grid search on a combination of data sampling techniques (as we were dealing with an imbalanced dataset), classification models, and hyperparameters for each model. After each gridsearch was conducted false positives and false negatives were manually evaluated; the words that were misclassified by the most models were considered first and assessed to determine whether the words were simply mislabeled. This iterative process resulted in a consistent increase in the prediction capability of the models.

Here is the PR curve associated with the first and the last iteration respectively:

![research_gif][first_iter] ![research_gif][second_iter]

While this project had lots of room for improvement, in the end it was not further pursued as the impact that this work had the potential to make was insignificant. Instead, new topics were considered for future work.




## Take-Aways

1. At a high level this project imparted significant lessons in machine learning research "project management". These lessons included the ability to assess what scope of projects were achievable as well as what my first dive into how to find projects in machine learning that will generate an impact or would be more interesting.

2. Through this project I learned countless machine learning techniques and methodologies, producing the first set of code that I would reuse in future projects for reference. I was able to utilize the common ML toolkits such as Tensorflow and Scikit and implemented proven algorithms such as SMOTE. The value of automating a machine learning pipeline for eventual grid searching was also made clear.

3. This project demonstrated the challenges of dealing with big data as well. The google news pretrained vectors were multiple gigabytes in size and required both special hardware and premeditated software decisions to efficiently deal with the mass.


[dundar_homepage]: https://cs.iupui.edu/~dundar/index.htm
[codebase]: https://github.com/uladkasach/Word-Subject-Classification

[SSR_Preview]: /_material/other_papers/previews/Semantic_Subject_Recognition_Preview.png "Semi-Supervised Labeling and Classification of Words by Semantic Subject"
[paper]: /_material/other_papers/Semantic_Subject_Recognition.pdf


[tsne_words]:  /_material/research/Semantic_Subject/tsne_12.5m_stop.png
[first_iter]: /_material/research/Semantic_Subject/iteration_0_PR.png
[second_iter]: /_material/research/Semantic_Subject/iteration_3_PR.png
