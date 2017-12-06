# Multi-Aspect Sentiment Analysis of Hotel Reviews

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


## Take-Aways
[dundar_homepage]: https://cs.iupui.edu/~dundar/index.htm
[codebase]: https://github.com/uladkasach/Word-Subject-Classification

[SSR_Preview]: /_material/other_papers/previews/Semantic_Subject_Recognition_Preview.png "Semi-Supervised Labeling and Classification of Words by Semantic Subject"
[paper]: /_material/other_papers/Semantic_Subject_Recognition.pdf


[tsne_words]:  /_material/research/Semantic_Subject/tsne_12.5m_stop.png
