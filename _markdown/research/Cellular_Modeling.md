# Cellular Modeling

The goal of this project was to simulate cellular development for the purpose of predicting the product of 3D biofabrication attempts.

At a high level, the goal is to predict whether certain configurations would lead to successful constructs through a scaffold-free biofabrication technique. In other words, we wanted to make sure that the cells in the construct will 1. successfully construct the target structure after fusion and 2. survive the fabrication process in light of metabolic limitations (lack of oxygen, too much lactic acid, etc).

The main innovation that this work produced was the incorporation of metabolic processes and cell-environment interactions during the simulation. It is certain that simulations, like the one created in this project, will be critical in biofabrication - in the very least this project demonstrates that modeling cell-environment interactions is possible and computationally feasible.

## Publication
This research resulted in a publication of this work that does an excellent job summarizing the most completed aspects of the simulation software and its capabilities. It was published in the Journal of Biofabrication under the title: [A heuristic computational model of basic cellular processes and oxygenation during spheroid-dependent biofabrication][Cellular_Modeling_Link]

- [![pdf_preview][CM_Preview]][Cellular_Modeling_Link]

## Simulation Software

The simulation capably describes:

- Cellular motion
- Cellular adhesion
- The diffusion of chemicals in the environment and the interaction of cells with this diffusion field
- The stochastic processes of cell death, cell splitting, and other cellular dynamics.

Through these descriptions the simulation was able to demonstrate the phenomena of hole closure, spheroid fusion, and more:

- ![research_gif][hole_closure] ![research_gif][fusion]





## Involvement
My involvement with this project started as i was recommended to Dr. Moldovan for this project by Dr. Tovar, based on his previous experience with me as a researcher. The project highly leveraged my strengths in the applied mathematics, developed from Physics, and in software development, developed from the endless hours I spend constantly programming: these strengths enabled a deep understanding the mathematics underlying the models and enabled a foresight in application structure for maintainability, scaling, and reusability.

Primary responsibilities consisted of improving the simulation software from a software engineering perspective (maintainability, reusability, speed: enabling the simulation to start from previously completed states, separating the simulation processes from the result analysis processes, etc) and expanding the simulation capabilities for the goals of demonstrating real world phenomena captured by the model (attempts at calibrating model specific constants to real world values, monitoring the energy of the system throughout the simulation, etc).

Throughout the project I focused on having a clear understanding of the big picture of the project: understanding why the work we were doing was relevant, what paths would be most effective in progressing the state of simulations in biofabrication at the time, and what the simulation needs to be capable of describing in order to be impactful.

## Take-Aways
1. Research is exhilarating. Research tackles problems that have not yet been solved: progressing the state of the art in the world and setting you at a position where all possibilities are yet to be explored. The research I had conducted with Dr. Tovar previously had demonstrated that the work patterns required in research resonated with my work processes; this experience brought to light the accessibility of working on research which is incredibly impactful.  

2. Whatever research I am conducting in the future requires the constant use of mathematics. The points of the research which were most rewarding were those in which I was able to apply mathematics to analyze or generate non-intuitive results. This was a significant indicator that Machine Learning is the right direction in research.

3. PhD candidates are living the dream: they get to focus the majority of their time on their research. The classes they take are directly relevant to the research they conduct. All they are required to think about, to work on, to talk about is research. Their focus is 100% delegated to the advancement of something that is impactful and that no one else has yet solved or done. That... that is the path that will enable one to create an impact.
    - At this point in my life i had begun the routine that would define the rest of my undergraduate career: work, sleep, repeat. Okay - sometimes i would eat. While this sounds like it fully aligns with what I pointed out to be the highlights of PhD candidacy, my situation was different in the sense that I could not focus on one task: for most of my college degree I was wrestling earning straight A's (to go to graduate school), research, a part time job or working on the duplex. I was and became more and more resentful of this fact as time went on: I daydream consistently about being able to focus all of my attention on one domain.
        - Self-awareness of this state later led to a realization that opportunities need to be chosen, not all accepted.







[CM_Preview]:  /_material/research/Cellular_Modeling/Cellular_Modeling_Preview.png "A heuristic computational model of basic cellular processes and oxygenation during spheroid-dependent biofabrication"
[Cellular Modeling Paper]:  /_material/research/Cellular_Modeling/Cellular_Modeling.pdf
[Cellular_Modeling_Link]: http://iopscience.iop.org/article/10.1088/1758-5090/aa6ed4

[hole_closure]: /_material/research/Cellular_Modeling/hole_closure_100s.gif
[fusion]: /_material/research/Cellular_Modeling/fusion_test.gif
