---
title: "Learning Semantic Representations and Discriminative Features in Unsupervised Domain Adaptation"
collection: publications
category: conferences
permalink: /publication/JDSTN
excerpt: 'This paper proposes a novel framework for improving classification accuracy in unsupervised domain adaptation across various tasks in vision datasets. It uses an approach analogous to the baseline model and incorporates new terms in the loss function to improve the alignment of source and target images in the feature space.'
date: 29-06-2023
venue: 'IEEE 2023 11th International Symposium on Electronic Systems Devices and Computing (ESDC)'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/10149872'
citation: 'R. Sidibomma and R. K. Sanodiya, "Learning Semantic Representations and Discriminative Features in Unsupervised Domain Adaptation," 2023 11th International Symposium on Electronic Systems Devices and Computing (ESDC), Sri City, India, 2023, pp. 1-6, doi: 10.1109/ESDC56251.2023.10149872.'
---

**Abstract**
In domain adaptation, the goal is to train a neural network on the source domain and obtain a good accuracy on the target domain. In such a scenario, it is important to transfer the knowledge from the labelled source domain to the unlabelled target domain due to the expensive cost of manual labelling. Following the trail of works in the recent time, feature level alignment seems to be the most promising direction in unsupervised domain adaptation. In most of the recent works using this feature alignment, the semantic information present in the labelled source domain has not been exploited. Among the works that have tried to learn this semantic representations, the discriminative features have not been taken into consideration which results in lower accuracy on target domain. In this paper, we present a novel approach, joint discriminative and semantic transfer network (JDSTN) that not only aligns the semantic representations of source and target domain, but also enhances the discriminative features and thereby improving the accuracy significantly. This is achieved by using pseudo-labels to align the feature centroids of source and target domains while introducing losses that promote the learning of discriminative features.
