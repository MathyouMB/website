---
title: Declarative Test-Native Software Fault Injection
description: An approach for orchestrating software fault injection scenarios directly in familiar automated test suites.
date: 2026-07-05
link: https://doi.org/10.1145/3803437.3804442
kind: Publication
authors:
  - Matthew MacRae-Bovell
venue: In Proceedings of FSE 2026
bibtex: |
  @inproceedings{10.1145/3803437.3804442,
    author = {MacRae-Bovell, Matthew},
    title = {Declarative Test-Native Software Fault Injection},
    year = {2026},
    isbn = {9798400726361},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3803437.3804442},
    doi = {10.1145/3803437.3804442},
    abstract = {Software fault injection (SFI) is a powerful resilience testing technique for validating how systems behave under adverse conditions such as network latency, dependency outages, and resource exhaustion. However, fault injection remains uncommon outside enterprise software development teams due to the operational complexity of existing tools, which often rely on specialized infrastructure and workflows that differ substantially from regular automated tests. As a result, resilience testing is frequently treated as a specialized activity rather than an integrated part of everyday software development. In this work, we present an approach that integrates fault injection scenario orchestration directly into familiar automated test suites. We introduce ChaosSpec, a prototype test framework that enables developers to declaratively orchestrate services and failure scenarios without specialized infrastructure knowledge.},
    booktitle = {Proceedings of the 34th ACM International Conference on the Foundations of Software Engineering},
    pages = {91–93},
    numpages = {3},
    keywords = {resilience testing, software fault injection},
    location = {Concordia University, Montreal, QC, Canada},
    series = {FSE Companion '26}
  }
---
