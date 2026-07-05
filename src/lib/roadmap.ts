import { Phase } from "@/types";

export const ROADMAP: Phase[] = [
  {
    phase: 1,
    title: "Foundations",
    milestones: [
      {
        id: "1-1",
        title: "Variables & data types",
        sources: [
          { label: "Python official tutorial", url: "https://docs.python.org/3/tutorial/" },
          { label: "freeCodeCamp Python", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
        ],
      },
      {
        id: "1-2",
        title: "Control flow (if/else, loops)",
        sources: [
          { label: "Python official tutorial", url: "https://docs.python.org/3/tutorial/controlflow.html" },
        ],
      },
      {
        id: "1-3",
        title: "Functions & scope",
        sources: [
          { label: "Real Python functions", url: "https://realpython.com/defining-your-own-python-function/" },
          { label: "Mosh (YouTube)", url: "https://www.youtube.com/@programmingwithmosh" },
        ],
      },
      {
        id: "1-4",
        title: "Data structures (list, dict, set, tuple)",
        sources: [
          { label: "Python official docs", url: "https://docs.python.org/3/tutorial/datastructures.html" },
        ],
      },
    ],
  },
  {
    phase: 2,
    title: "Intermediate",
    milestones: [
      {
        id: "2-1",
        title: "Object-oriented programming",
        sources: [
          { label: "Real Python OOP", url: "https://realpython.com/python3-object-oriented-programming/" },
          { label: "Corey Schafer OOP", url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM" },
        ],
      },
      {
        id: "2-2",
        title: "File I/O & error handling",
        sources: [
          { label: "Python docs", url: "https://docs.python.org/3/tutorial/inputoutput.html" },
        ],
      },
      {
        id: "2-3",
        title: "Modules, packages & virtual environments",
        sources: [
          { label: "Real Python venvs", url: "https://realpython.com/python-virtual-environments-a-primer/" },
        ],
      },
      {
        id: "2-4",
        title: "Working with APIs & JSON",
        sources: [
          { label: "Real Python requests", url: "https://realpython.com/python-requests/" },
          { label: "Corey Schafer", url: "https://www.youtube.com/channel/UCCezIgC97PvUuR4_gbFUs5g" },
        ],
      },
    ],
  },
  {
    phase: 3,
    title: "Advanced core",
    milestones: [
      {
        id: "3-1",
        title: "Decorators & closures",
        sources: [
          { label: "Real Python decorators", url: "https://realpython.com/primer-on-python-decorators/" },
          { label: "ArjanCodes", url: "https://www.youtube.com/@ArjanCodes" },
        ],
      },
      {
        id: "3-2",
        title: "Generators & iterators",
        sources: [
          { label: "Real Python generators", url: "https://realpython.com/introduction-to-python-generators/" },
        ],
      },
      {
        id: "3-3",
        title: "Context managers",
        sources: [
          { label: "Real Python context managers", url: "https://realpython.com/python-with-statement/" },
        ],
      },
      {
        id: "3-4",
        title: "Async/await & asyncio",
        sources: [
          { label: "Python asyncio docs", url: "https://docs.python.org/3/library/asyncio.html" },
          { label: "Real Python async", url: "https://realpython.com/async-io-python/" },
        ],
      },
      {
        id: "3-5",
        title: "Type hints & mypy",
        sources: [
          { label: "Python typing docs", url: "https://docs.python.org/3/library/typing.html" },
        ],
      },
    ],
  },
  {
    phase: 4,
    title: "Ecosystem",
    milestones: [
      {
        id: "4-1",
        title: "Testing with pytest",
        sources: [
          { label: "pytest docs", url: "https://docs.pytest.org/" },
          { label: "Real Python testing", url: "https://realpython.com/pytest-python-testing/" },
        ],
      },
      {
        id: "4-2",
        title: "Packaging & pip",
        sources: [
          { label: "Python packaging guide", url: "https://packaging.python.org/" },
        ],
      },
      {
        id: "4-3",
        title: "Concurrency (threading, multiprocessing)",
        sources: [
          { label: "Real Python concurrency", url: "https://realpython.com/python-concurrency/" },
          { label: "Senior Python GitHub", url: "https://github.com/Rustam-Z/senior-python-engineer" },
        ],
      },
      {
        id: "4-4",
        title: "Design patterns in Python",
        sources: [
          { label: "Refactoring Guru", url: "https://refactoring.guru/design-patterns/python" },
        ],
      },
    ],
  },
  {
    phase: 5,
    title: "Specialization",
    milestones: [
      {
        id: "5-1",
        title: "Data Science (NumPy, Pandas, Matplotlib)",
        sources: [
          { label: "DataCamp", url: "https://www.datacamp.com" },
          { label: "Kaggle learn", url: "https://www.kaggle.com/learn" },
        ],
      },
      {
        id: "5-2",
        title: "Web development (FastAPI or Django)",
        sources: [
          { label: "FastAPI docs", url: "https://fastapi.tiangolo.com" },
          { label: "Django docs", url: "https://docs.djangoproject.com" },
        ],
      },
      {
        id: "5-3",
        title: "AI & Machine Learning",
        sources: [
          { label: "fast.ai", url: "https://www.fast.ai" },
          { label: "Hugging Face", url: "https://huggingface.co/learn" },
        ],
      },
      {
        id: "5-4",
        title: "Automation & scripting",
        sources: [
          { label: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com" },
        ],
      },
    ],
  },
];

export const ALL_MILESTONE_IDS = ROADMAP.flatMap((p) =>
  p.milestones.map((m) => m.id)
);
