---
title: "Using LLMs to Measure Sensitive Topics: Synthetic Respondents, Real Challenges"
description: "Working paper with Martijn de Jong and Rik Pieters."
date: "2026-01-02"
---

## Abstract

This research introduces the Generative Sensitive Response (GSR) model, a diagnostic framework for evaluating how LLMs perform in sensitive-topic measurement. It encompasses two elicitation protocols (response and prevalence prompting), a set of estimators for synthetic data, and a suite of validity and reliability metrics grounded in psychometric principles. In *response prompting*, LLMs act as individual respondents in surveys. In *prevalence prompting*, LLMs directly estimate the aggregate population quantity of interest. We use the GSR in three large-scale empirical applications: smoking during pregnancy, illegal online purchases of prescription medication, and problem drinking. Applying the GSR to 36 LLMs and over 400,000 prompts, we find that synthetic respondents cannot reliably replace human respondents in marketing research on sensitive topics. Response prompting yielded low validity and reliability on direct questions. Indirect questioning techniques, which reduce social-desirability bias for humans, did not systematically improve the validity of LLM-generated answers. In contrast, prevalence prompting produced more reliable aggregate estimates than response prompting, but remained systematically biased. This revealed that current LLMs cannot replace human respondents on sensitive topics, and how the GSR provides a framework for evaluating current and future models as these evolve.
