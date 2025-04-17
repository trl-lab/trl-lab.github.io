---
layout: post
title: >
  TRL reading group discussion: "Large Language Models(LLMs) on Tabular Data: Prediction, Generation, and 
  Understanding - A Survey"
date: 2025-04-16
description: >
  Discussion protocol and results of the TRL reading group on the paper "Large Language Models(LLMs) on Tabular Data:
  Prediction, Generation, and Understanding - A Survey" by X. Fang et al. (2024).
tags: ALoT discussion
categories: reading-group
pretty_table: true
toc:
  sidebar: left
---

_Authors (in alphabetical order): Cornelius Wolff, Daniel Gomm, Effy Xue Li, Madelon Hulsebos, Zeyu Zhang_

For the inaugural session of the [Amsterdam Lunch on Table (ALoT) reading group](/trl-reading-group), we read the survey paper -
[“Large Language Models(LLMs) on Tabular Data: Prediction, Generation, and Understanding - A Survey “](https://arxiv.org/pdf/2402.17944)
by X. Fang et al.

The survey provides an overview of how LLMs are used across various tasks involving tabular data, specifically from the
perspectives of Prediction, Generation, and Understanding. During our discussion, we reflected on the state of the field
and surfaced a range of interesting insights and open questions. Here are a few key points raised during the meeting:

## Reflections on conceptualization
**Tabular Understanding versus Tabular Reasoning.** The survey considers tabular understanding to comprehend tasks to be
tabular question answering and text-to-SQL. In the data management community, table understanding has been traditionally
perceived as a passive process such as inferring “semantic column types”, “matching entities”, and “semantic column
relationships”. These understanding tasks do not take a specific query as input. Instead, we consider the suggested
question answering tasks to be better reflected by the concept of “tabular reasoning”.

**Tabular Question Answering versus Text-to-SQL.** Moreover, the survey distinguishes the task of (numeric) tabular QA
versus text-to-SQL. We’ve been discussing what the exact difference is, and the common view we had is that tabular QA is
the task where some entity poses a question about a given table to a system and receives an answer to it. We consider
text-to-SQL as one of the possible methods to yield this answer through code execution, whereas the answer might as well
be generated through an LLM reasoning over a table directly. What method is applicable or suitable depends, among other
things, on the data source (e.g. data lake with tabular files, relational database, or spreadsheet) and the nature of
the question, e.g. an analytical query necessitating joins or more simplistic lookups.

## Synergy across Prediction, Generation, and Understanding
Within the survey, tabular data usages are divided into three main categories: Prediction, Generation, and 
Understanding. This categorization provides a useful framework for grouping relevant tasks and methods. However, we 
found that these tasks often complement each other in practice. For example, tabular data generation can be used to
augment training data to help with fine-tuning and in turn help with Prediction-related tasks. Understanding of the
table structure and semantics can improve the prediction and generation. This interplay of tasks suggests thinking
beyond narrow task descriptions, but designing a more unified view or shared representations that can help tabular tasks
in general.

## Characteristics of tabular data
We discussed the data characteristics, and agreed that the need for preprocessing does not seem specific to tabular data
as this seems necessary for many modalities, while the type of preprocessing steps may differ.

We also discussed the different terminology across communities for similar concepts. An example is the notion of
“context-based interconnection” which is related to the notion of Functional Dependencies in relational databases as
well as causal relationships in the machine learning community. Generally, it is an interesting question to investigate
how we can identify and leverage these relationships. The DB and ML communities have quite some work on this that could
be relevant.

We also find that some properties of tabular data are missing, such as relationships with other tables (for example, as
a consequence of database normalisation, or just joinable tables) and dimensionality (the number of rows easily goes up
to millions, and certain tasks, e.g. column-level aggregations, need all of them). These characteristics specific to
tabular data give rise to challenges across all tasks.

## Causal Relations for Tabular Data
Although the survey does not explicitly address it, the presence of causal relationships among different attributes is a
fundamental characteristic of tabular data. A clear understanding of these causal dependencies enables more effective
data profiling, which can yield significant benefits for both data management and system design. For instance, TabPFN
leverages synthesized structured causal graphs to enhance the generation of tabular data, substantially improving the
pretraining of transformer models for predictive tasks on tables. This provides a strong intuition that language models,
too, could benefit from incorporating such causal information.

## Future directions

**The importance of real-world or realistic datasets.** It is especially challenging to find realistic tabular datasets that
resemble real-world properties, as tabular data is prevailing in organizations which are typically hesitant or unlikely
to publish their data. Attempts have been made to compile more typical tabular datasets (e.g. GitTables, BIRD, etc.) or
synthesized dataset (e.g. WikiDBs) but the variety in different domains is large (e.g. healthcare, enterprises,
governments) while the types of tables (e.g. relational databases, spreadsheets, doc tables, etc) also vary.

**Privacy concerns are common in tabular data contexts.** Tabular data is prevailing in organizational contexts. This
induces the need for privacy-preserving methods, having high-performing models with sparse or synthetic data inputs,
and developing realistic synthetic tabular datasets.