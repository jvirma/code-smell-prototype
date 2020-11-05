# Code smell detector

This repository is only used for hosting code smell datasets.

Artificial intelligence is one of the major subtleties of our time. Artificial intelligence is utilized in improving the quality of software projects and in applications themselves. Code smells are characteristics in the source code that indicate there is a deeper problem, and they are a long-term nuisance for developers. Code smells make it hard to maintain, reuse, and expand software. You can refactor your source code to get rid of code smells, but first you need to find code smells. In this thesis, I made a prototype for detecting code smells as well as presented its design and development. The prototype was implemented in the Python programming language, using machine learning, neural networks, and deep learning. Training and testing data were taken from the MLCQ code smell dataset, and non-smelly samples were collected from GitHub’s open source Java repositories. The prototype was able to detect “long method” and “feature envy” code smells successfully, although only a relatively small amount of data was collected and used for the training of the prototype.

Master's thesis:
https://lutpub.lut.fi/handle/10024/161673

Executable prototype:
https://colab.research.google.com/drive/1KNJn1gzphwtwMj9xQuV9szlziA7OxUFY?usp=sharing
