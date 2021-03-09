# Awesome Software Architecture [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

![Twitter URL](https://img.shields.io/badge/-@mehdi_hadeli-%231DA1F2?style=flat-square&logo=twitter&logoColor=ffffff) 
[![blog](https://img.shields.io/badge/blog-dotnetuniversity.com-brightgreen?style=flat-square)](https://dotnetuniversity.com/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](./contributing.md)
![Twitter URL](https://img.shields.io/twitter/url?label=Tweet&url=https%3A%2F%2Fgithub.com%2Fmehdihadeli%2Fawesome-software-architecture)

![](./banner.png)

> Collection of useful Articles and resources to learn and practice about software architecture, patterns and principles. this repository will be updated continuously, keep yourself up to date 

Contributions are always welcome! Please take a look at the [contribution guidelines](https://github.com/mehdihadeli/awesome-software-architecture/blob/master/contributing.md) pages first.

Thanks to all [contributors](https://github.com/mehdihadeli/awesome-software-architecture/graphs/contributors), you're awesome and wouldn't be possible without you! The goal is to build a categorized community-driven collection of very well-known resources.

Check out my [blog](https://dotnetuniversity.com) or find me on [Linkedin](https://www.linkedin.com/in/mehdihadeli/) or [Twitter](https://twitter.com/mehdi_hadeli)!


## Give a Star! ⭐️
My primary focus in this repository is on quality. Creating a good quality of resources. It takes a lot of time. If you like this, learned something or you are using it in your applications, please give it a star ⭐. This is the best motivation for me to continue this work. Thanks!

## Share It
If you think this repository makes a difference and is worth it, please share it with your friends and on social networks. I will be extremely grateful.

## Contents
- [Software Architecture](#software-architecture)
- [Architectural Style](#architectural-style)
  - [Traditional N-Layer Architecture](traditional-n-layer-architecture)
  - [Clean Architecture](#clean-architecture)
  - [Onion Architecture](#onion-architecture)
  - [Ports And Adapters Architecture (Hexagonal Architecture)](#ports-and-adapters-architecture-hexagonal-architecture-)
  - [Vertical Slice Architecture](#vertical-slice-architecture)
  - [Event Driven Architecture](#event-driven-architecture)
  - [Service Oriented Architecture](#service-oriented-architecture)
  - [Component Based Architecture](#component-based-architecture)
- [Architectural Design Principles](#architectural-design-principles)
  - [Crosscutting Concerns](#crosscutting-concerns)
  - [Encapsulation](#encapsulation)
  - [Dependency Inversion](#dependency-inversion)
  - [Interface Segregation Principle](#interface-segregation-principle)
  - [Single Responsibility](#single-responsibility)
  - [Open/Closed Principle](#open/closed-principle)
  - [Command Query Separation](command-query-Separation)
  - [Least Astonishment](#least-astonishment)
  - [Demeter](#demeter)
  - [Favor Composition over Inheritance](favor-composition-over-inheritance)
  - [DRY](#dry)
  - [KISS](#kiss)
  - [YAGNI](#yagni)
  - [Minimize Coupling](#minimize-coupling) 
  - [Maximize Cohesion](#maximize-cohesion) 
  - [Persistence Ignorance](#persistence-ignorance)
  - [GRASP](#grasp)
- [Architectural Patterns](#architectural-patterns)
  - [Domain Driven Design - Domain Centric](#domain-driven-design---domain-centric)
  - [Data Driven Design - Data Centric](#data-driven-design---data-centric)
  - [CQRS](#cqrs)
  - [MVC](#mvc)
  - [Event Sourcing](#event-sourcing)
  - [Microservices Architectural Pattern](#microservices-architectural-pattern)
  - [Serverless Architectural Pattern](#serverless-architectural-pattern)
  - [MicroKernel Architectural Pattern](microKernel-architectural-pattern)
- [Design Patterns](#design-patterns)
  - [Decorator](#decorator)
  - [Specification Pattern](#specification-pattern)
  - [Repository Pattern](#repository-pattern)
- [Cloud Design Patterns](#cloud-design-patterns)
  - [Anti-Corruption Layer Pattern](#anti-corruption-layer-pattern)
  - [Gateway Pattern](#gateway-pattern)
  - [Asynchronous Request-Reply pattern](#anti-corruption-layer-pattern)
  - [Cache-Aside](#cache-aside)
  - [Command and Query Responsibility Segregation (CQRS)](#command-and-query-responsibility-segregation-(cqrs))
  - [Circuit Breaker](#circuit-breaker)
  - [Gateway Aggregation](#gateway-aggregation)
  - [Gateway Offloading](#gateway-offloading)
  - [Gateway Routing](#gateway-routing)
  - [Priority Queue](#priority-queue)
  - [Publisher/Subscriber](#publisher/subscriber)
  - [Retry](#retry)
  - [Saga](#saga)
  - [Sharding](#sharding)
  - [Sidecar](#sidecar)
  - [Throttling](#throttling)
  - [Valet Key](#valet-key)
  - [At-least-Once Delivery (Outbox Pattern)](#at-least-once-delivery-(outbox-pattern))
  - [Exactly-Once Delivery](#exactly-once-delivery)
- [Object Oriented Design](#object-oriented-design)
- [Distributed Systems Design](#distributed-systems-design)
- [Scalable Software Architecture](#scalable-software-architecture)
- [Clean Code](#clean-code)
- [Anti Patterns](#anti-patterns)
  - [Anemic Domain Model](#anemic-domain-model)
  - [Code Smells](#code-smells)
- [Asynchronous Patterns](#asynchronous-patterns)
- [Modular Monolith](#modular-monolith)
- [Packaging](#packaging)
- [Azure Application Architecture](azure-application-architecture)
- [Modeling](#modeling)
  - [Relationships](#relationships)
  - [Use Case Diagram](#use-case-diagram)
  - [Class Diagram (Class Modeling)](#class-diagram-(class-modeling))
  - [ER Diagrams (Data Modeling)](#er-diagrams-(data-modeling))
  - [Data Model Notations](#data-model-notations)
  - [Conceptual Model](#conceptual-model)
  - [Logical Modeling](#logical-modeling)
  - [Physical Modeling](#physical-modeling)
  - [Tools](#tools)
- [Engineering Blogs](#engineering-blogs)
- [Books](#books)
- [Other Resources](#other-resources)

## Software Architecture

## Resources
- [Modular Monolith](https://files.gotocon.com/uploads/slides/conference_12/515/original/gotoberlin2018-modular-monoliths.pdf)
- [Visualising Software Architecture](http://static.codingthearchitecture.com/visualising-software-architecture.pdf)
- [.NET Architecture Guides](https://dotnet.microsoft.com/learn/dotnet/architecture-guides)
- [Open Agile Architecture](https://pubs.opengroup.org/architecture/o-aa-standard/#_open_agile_architecture)
### 📝 Articles
- [The Software Architecture Chronicles](https://herbertograca.com/2017/07/03/the-software-architecture-chronicles/)
- [Software Architecture Premises](https://herbertograca.com/2017/07/05/software-architecture-premises/) - Herberto Graca
- [DDD, Hexagonal, Onion, Clean, CQRS, … How I put it all together](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/) - Herberto Graca
- [Reflecting architecture and domain in code](https://herbertograca.com/2019/06/05/reflecting-architecture-and-domain-in-code/) - Herberto Graca
- [More than concentric layers](https://herbertograca.com/2018/07/07/more-than-concentric-layers/) - Herberto Graca
- [Documenting Software Architecture](https://herbertograca.com/2019/08/12/documenting-software-architecture/) - Herberto Graca
- [Architectural Styles vs. Architectural Patterns vs. Design Patterns](https://herbertograca.com/2017/07/28/architectural-styles-vs-architectural-patterns-vs-design-patterns/)
- [Package by component and architecturally-aligned testing](http://www.codingthearchitecture.com/2015/03/08/package_by_component_and_architecturally_aligned_testing.html)
- [Schools of Package Architecture - An Illustration](http://codemanship.co.uk/parlezuml/blog/?postid=539)
- [Modularity and testability](http://www.codingthearchitecture.com/2014/10/01/modularity_and_testability.html)
- [Software architecture vs code](http://www.codingthearchitecture.com/2014/05/29/software_architecture_vs_code.html)
- [An architecturally-evident coding style](http://www.codingthearchitecture.com/2014/06/01/an_architecturally_evident_coding_style.html)
- [Mapping software architecture to code](http://www.codingthearchitecture.com/2013/04/08/mapping_software_architecture_to_code.html)
- [Components vs classes](http://www.codingthearchitecture.com/2015/03/31/components_vs_classes.html)
- [Simple Sketches for Diagramming your Software Architecture](http://www.methodsandtools.com/archive/softwarearchitecturesketches.php)
- [Architectural Patterns and Styles](https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ee658117(v=pandp.10))
- [Monolithic Architecture](https://herbertograca.com/2017/07/31/monolithic-architecture/)
- [techtribes.je - context](http://www.codingthearchitecture.com/2013/07/09/techtribes_je_context.html)
- [Aligning software architecture and code](http://www.codingthearchitecture.com/2013/07/03/aligning_software_architecture_and_code.html)
- [Component Based Architecture](https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348)
- [Layers, hexagons, features and components](https://www.codingthearchitecture.com/2016/04/25/layers_hexagons_features_and_components.html)
- [PresentationDomainDataLayering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)
- [Layers, hexagons, features and components](http://www.codingthearchitecture.com/2016/04/25/layers_hexagons_features_and_components.html)
- [Architectural Drivers: Building Blocks for Decision Making](https://www.neverletdown.net/2014/10/architectural-drivers.html)

### 📹 Videos
- [DevTernity 2016: Simon Brown - The Art of Visualising Software Architecture](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=oDpdaXt0HQI&ab_channel=Devoxx)
- [GOTO 2018 • Modular Monoliths • Simon Brown](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=5OjqD-ow8GE&feature=emb_title&ab_channel=GOTOConferences)
- [GOTO 2014 • Software Architecture vs. Code • Simon Brown](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=GAFZcYlO5S0)
- [Modular monoliths (Simon Brown) - 2016](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=h_rBDIC51C4)
- [Modular monoliths by Simon Brown](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=kbKxmEeuvc4)
- [Software architecture and code](https://skillsmatter.com/skillscasts/4312-software-architecture-and-code)
- [Munich .NET Meetup: Modular Monolith Architecture - One to rule them all](https://www.youtube.com/watch?v=njDSXUWeik0)
- [Majestic Modular Monoliths by Axel Fontaine](https://www.youtube.com/watch?v=BOvxJaklcr0)
- [GOTO 2020 • Five Things Every Developer Should Know about Software Architecture • Simon Brown](https://www.youtube.com/watch?v=9Az0q2XHtH8)
- [How to build software architecture diagrams](https://www.youtube.com/watch?v=_I0U1sZ9RJ8)
- [Visualising software architecture with the C4 model - Simon Brown, Agile on the Beach 2019](https://www.youtube.com/watch?v=x2-rSnhpw0g)
- [Structurizr C4 Model series](https://www.youtube.com/playlist?list=PLLET0MJVt0Uc0Nek7yck8FG2fNnv9H32v)

## Architectural Style

### Resources
- [Architectural Patterns and Styles](https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ee658117(v=pandp.10)) - Microsoft
- [The Software Architecture Chronicles](https://herbertograca.com/2017/07/03/the-software-architecture-chronicles/) - Herberto Graca
- [DDD, Hexagonal, Onion, Clean, CQRS, … How I put it all together](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/) - Herberto Graca
- [Reflecting architecture and domain in code](https://herbertograca.com/2019/06/05/reflecting-architecture-and-domain-in-code/) - Herberto Graca
- [More than concentric layers](https://herbertograca.com/2018/07/07/more-than-concentric-layers/) - Herberto Graca
- [Architectural Styles vs. Architectural Patterns vs. Design Patterns](https://herbertograca.com/2017/07/28/architectural-styles-vs-architectural-patterns-vs-design-patterns/)
- [Component Based Architecture](https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348)
- [Package by component and architecturally-aligned testing](http://www.codingthearchitecture.com/2015/03/08/package_by_component_and_architecturally_aligned_testing.html)
- [Modular Monolith](https://files.gotocon.com/uploads/slides/conference_12/515/original/gotoberlin2018-modular-monoliths.pdf)
- [The C4 Model](https://c4model.com/)
- [Layers, hexagons, features and components](https://www.codingthearchitecture.com/2016/04/25/layers_hexagons_features_and_components.html)
- [techtribes.je - containers](http://www.codingthearchitecture.com/2013/08/05/techtribes_je_containers.html)
- [techtribes.je - components](http://www.codingthearchitecture.com/2013/08/11/techtribes_je_components.html)
- [PresentationDomainDataLayering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)
- [Multiple ways of defining Clean Architecture layers](https://proandroiddev.com/multiple-ways-of-defining-clean-architecture-layers-bbb70afa5d4a)
- [Modular Monolith: A Primer](https://www.kamilgrzybek.com/design/modular-monolith-primer/)
- [Layers, hexagons, features and components](http://www.codingthearchitecture.com/2016/04/25/layers_hexagons_features_and_components.html)

### 🔖 Samples
- [https://github.com/techtribesje/techtribesje](https://github.com/techtribesje/techtribesje)
- [https://github.com/kgrzybek/modular-monolith-with-ddd](https://github.com/kgrzybek/modular-monolith-with-ddd)
- [https://github.com/hgraca/explicit-architecture-php](https://github.com/hgraca/explicit-architecture-php)
- [https://github.com/Sairyss/domain-driven-hexagon](https://github.com/Sairyss/domain-driven-hexagon)

### 📹 Videos
- [GOTO 2018 • Modular Monoliths • Simon Brown](https://www.youtube.com/watch?v=5OjqD-ow8GE&feature=emb_title&ab_channel=GOTOConferences)
- [GOTO 2014 • Software Architecture vs. Code • Simon Brown](https://www.youtube.com/watch?v=GAFZcYlO5S0)
- [Modular monoliths (Simon Brown) - 2016](https://www.youtube.com/watch?v=h_rBDIC51C4)
- [Modular monoliths by Simon Brown](https://www.youtube.com/watch?v=kbKxmEeuvc4)
- [Munich .NET Meetup: Modular Monolith Architecture - One to rule them all](https://www.youtube.com/watch?v=njDSXUWeik0)
- [Majestic Modular Monoliths by Axel Fontaine](https://www.youtube.com/watch?v=BOvxJaklcr0)

### Traditional N-Layer Architecture

#### 📝 Articles

- [N-tier architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier)
- [Traditional "N-Layer" architecture applications](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#traditional-n-layer-architecture-applications)
- [What is N-Tier Architecture? How It Works, Examples, Tutorials, and More](https://stackify.com/n-tier-architecture/)
- [Layered Architecture](https://herbertograca.com/2017/08/03/layered-architecture/) - Herberto Graca

#### 📹 Videos

- [Layered/n-Tier Architectural pattern](https://www.youtube.com/watch?v=BCXcIllT7Lc)

### Clean Architecture

#### 📝 Articles
- [Clean architecture](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#clean-architecture) - Microsoft
- [Layers in DDD microservices](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice#layers-in-ddd-microservices) - Microsoft
- [Clean architecture](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#clean-architecture) - Microsoft
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Uncle Bob
- [Clean Architecture: Standing on the shoulders of giants](https://herbertograca.com/2017/09/28/clean-architecture-standing-on-the-shoulders-of-giants/) - Herberto Graca
- [DDD, Hexagonal, Onion, Clean, CQRS, … How I put it all together](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/) - Herberto Graca
- [Reflecting architecture and domain in code](https://herbertograca.com/2019/06/05/reflecting-architecture-and-domain-in-code/) - Herberto Graca
- [More than concentric layers](https://herbertograca.com/2018/07/07/more-than-concentric-layers/) - Herberto Graca
- [A Brief Intro to Clean Architecture, Clean DDD, and CQRS](https://blog.jacobsdata.com/2020/02/19/a-brief-intro-to-clean-architecture-clean-ddd-and-cqrs) - Jacobs Data
- [A Template for Clean Domain-Driven Design Architecture](https://blog.jacobsdata.com/2020/03/02/a-clean-domain-driven-design-architectural-template) - Jacobs Data
- [Onion Architecture In ASP.NET Core With CQRS – Detailed](https://codewithmukesh.com/blog/onion-architecture-in-aspnet-core/) - CodeWithMukesh
- [CQRS Translated to Clean Architecture](https://blog.fals.io/2018-09-19-cqrs-clean-architecture/)
- [A Brief Intro to Clean Architecture, Clean DDD, and CQRS](https://blog.jacobsdata.com/2020/02/19/a-brief-intro-to-clean-architecture-clean-ddd-and-cqrs)
- [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/)
- [Clean architecture series — Part 3](https://dev.to/pereiren/clean-architecture-series-part-3-2795)
- [Asp.net core series 63 domain model architecture eShopOnWeb project analysis](https://www.itworkman.com/89255.html)
- [Analysis of Equinox open source project under asp.net core series 62 CQRS architecture](https://www.cnblogs.com/MrHSR/p/10820545.html)
- [Equinox open source projects analyzed under the framework CQRS](https://www.programmersought.com/article/81052035363/)
- [Comprehensive understanding of domain model architecture combined with eShopOnWeb](https://www.programmersought.com/article/97275046219/)
- [Clean Architecture - An Introduction](https://www.dandoescode.com/blog/clean-architecture-an-introduction/)
- [Building ASP.NET Core Web APIs with Clean Architecture](https://fullstackmark.com/post/18/building-aspnet-core-web-apis-with-clean-architecture)
- [Clean Architecture for .NET Applications](https://paulovich.net/clean-architecture-for-net-applications/)
- [Hexagonal and Clean Architecture Styles with .NET Core (Reviewed)](https://paulovich.net/hexagonal-and-clean-architecture-styles-with-net-core-reviewed/)
- [ASP.NET Core WebAPI – Clean Architecture](https://codewithmukesh.com/project/aspnet-core-webapi-clean-architecture%e2%80%8b/)
- [Getting Started with Clean Architecture using ASP.NET Core – 01](https://www.gokhan-gokalp.com/en/getting-started-with-clean-architecture-using-asp-net-core-01/) - Gökhan Gökalp
- [Component Based Architecture](https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348)
- [Multiple ways of defining Clean Architecture layers](https://proandroiddev.com/multiple-ways-of-defining-clean-architecture-layers-bbb70afa5d4a)
- [Adoption of Clean Architecture layers with modules](https://medium.com/@anil.gudigar/adoption-of-clean-architecture-layers-with-modules-a0b5b9b4e716)
- [Clean Architecture : Part 2 – The Clean Architecture](https://crosp.net/blog/software-architecture/clean-architecture-part-2-the-clean-architecture/)

#### 📹 Videos
- [Clean Testing - Clean Architecture with .NET Core - Jason Taylor - NDC Oslo 2020](https://www.youtube.com/watch?v=T6NRcX1vnz8) - Jason Taylor
- [Clean Architecture with ASP.NET Core 3.0 - Jason Taylor](https://www.youtube.com/watch?v=5OtUm1BLmG0) - Jason Taylor
- [Clean Architecture with ASP.NET Core 2.1](https://www.youtube.com/watch?v=_lwCVE_XgqI&feature=youtu.be) - Jason Taylor
- [Clean Architecture with ASP.NET Core with Steve "Ardalis" Smith (2020-06-01)](https://www.youtube.com/watch?v=joNTQy-KXiU&t=1719s) - Steve Smith
- [SLC.NET Presents: Steve Smith (@Ardalis) - Clean Architecture with ASP.NET Core](https://www.youtube.com/watch?v=tYoqmL6e4oY) - Steve Smith
- [Tour of Microsoft's Reference ASP NET Core App eShopOnWeb](https://www.youtube.com/watch?v=rSpF1s8wcyA) - Steve Smith
- [An Overview of eShopOnWeb, an ASP.NET Core Reference Application](https://www.youtube.com/watch?v=vRZ8ucGac8M&ab_channel=Ardalis) - Steve Smith
- [Clean Architecture S02](https://www.youtube.com/playlist?list=PLY9iz4il6pyO46KZN-xQtZZMtdpBO9AoR) - Ivan Paulovich
- [Robert C Martin - Clean Architecture](https://www.youtube.com/watch?v=Nltqi7ODZTM&feature=youtu.be) - Uncle Bob
- [Gill CLEEREN: Clean architecture with ASP.NET Core | UCP2019](https://www.youtube.com/watch?v=BxtHt7tsX-c&t=2582s)

#### 🔖 Samples

- [https://github.com/Sairyss/domain-driven-hexagon](https://github.com/Sairyss/domain-driven-hexagon)
	> Guide on Domain-Driven Design, Hexagonal architecture, best practices etc.
	
- [https://github.com/JacobsDataSolutions/OrgManager](https://github.com/JacobsDataSolutions/OrgManager) - Jacobs Data
    > CQRS and Clean Domain-Driven Design concepts on the ASP.NET Core stack. Demo application for a fictional corporate organization management tool.
    
- [https://github.com/jasontaylordev/CleanArchitecture](https://github.com/jasontaylordev/CleanArchitecture) - Jason Taylor
    > Clean Architecture Solution Template for Angular 10 and .NET 5 - [Project Template (nuget package)](https://www.nuget.org/packages/Clean.Architecture.Solution.Template)

- [https://github.com/EduardoPires/EquinoxProject](https://github.com/EduardoPires/EquinoxProject) - Eduardo Pires
    > Full ASP.NET Core 3.1 application with DDD, CQRS and Event Sourcing concepts

- [https://github.com/ardalis/cleanarchitecture](https://github.com/ardalis/cleanarchitecture) - Steve Smith
    > A starting point for Clean Architecture with ASP.NET Core - [Project Template (visual studio extension)](https://marketplace.visualstudio.com/items?itemName=GregTrevellick.CleanArchitecture)

- [https://github.com/pereiren/dotnet-template-onion](https://github.com/pereiren/dotnet-template-onion)
	> Onion Architecture with .NET 5/.NET Core and CQRS/Event Sourcing following a DDD approach
	
- [https://github.com/dotnet-architecture/eShopOnWeb](https://github.com/dotnet-architecture/eShopOnWeb) - Steve Smith
    > Sample ASP.NET Core 5.0 reference application, powered by Microsoft, demonstrating a layered application architecture with monolithic deployment model. Download the eBook PDF from docs folder.

- [https://github.com/matthewrenze/clean-architecture-demo](https://github.com/matthewrenze/clean-architecture-demo) - Matthew Renze
    > A sample app for my presentation on Clean Architecture: Patterns, Practices, and Principles

- [https://github.com/jasontaylordev/NorthwindTraders](https://github.com/jasontaylordev/NorthwindTraders) - Jason Taylor
    > Northwind Traders is a sample application built using ASP.NET Core and Entity Framework Core.

- [https://github.com/hgraca/explicit-architecture-php](https://github.com/hgraca/explicit-architecture-php) - Herberto Graca
	> This repository is a demo of Explicit Architecture, using the Symfony Demo Application.
	
- [https://github.com/mmacneil/CleanAspNetCoreWebApi](https://github.com/mmacneil/CleanAspNetCoreWebApi) - Mark Macneil
    > Starter project for creating APIs built on ASP.NET Core using clean architecture.

- [https://github.com/ivanpaulovich/clean-architecture-manga](https://github.com/ivanpaulovich/clean-architecture-manga) - Ivan Paulovich
    > Clean Architecture with .NET5, C#9 and React+Redux. Use cases as central organizing structure, completely testable, decoupled from frameworks

- [https://github.com/Daniel-Krzyczkowski/CleanArchitectureWithDevSecOps](https://github.com/Daniel-Krzyczkowski/CleanArchitectureWithDevSecOps) - Daniel Krzyczkowski
    > This repository contains code samples related with clean software architecture and DevSecOps.

- [https://github.com/aspnetcorehero/Boilerplate](https://github.com/aspnetcorehero/Boilerplate) - Mukesh Murugan
    > Clean Architecture Solution Template for ASP.NET Core 5.0. Built with Onion/Hexagonal Architecture and incorporates the most essential Packages your projects will ever need. Includes both WebApi and Web(MVC) Projects.

- [https://github.com/fals/cqrs-clean-eventual-consistency](https://github.com/fals/cqrs-clean-eventual-consistency) - Filipe Augusto
	> CQRS, using Clean Architecture, multiple databases and Eventual Consistency

- [https://github.com/rafaelfgx/Architecture](https://github.com/rafaelfgx/Architecture) - Rafael Garcia
	> Architecture .NET 5, ASP.NET Core 5, Entity Framework Core 5, C# 9, Angular 11, Clean Code, SOLID, DDD.

- [https://github.com/kgrzybek/sample-dotnet-core-cqrs-api](https://github.com/kgrzybek/sample-dotnet-core-cqrs-api) - Kamil Grzybek
	> Sample .NET Core REST API CQRS implementation with raw SQL and DDD using Clean Architecture.

- [https://github.com/phongnguyend/Practical.CleanArchitecture](https://github.com/phongnguyend/Practical.CleanArchitecture)
	> Asp.Net Core 5 Clean Architecture (Microservices, Modular Monolith, Monolith) samples (+Blazor, Angular 11, React 17, Vue 2.6), Domain-Driven Design, CQRS, Event Sourcing, SOLID, Asp.Net Core Identity Custom Storage, Identity Server 4 Admin UI, Entity Framework Core, Selenium E2E Testing, SignalR Notification, Hangfire Tasks Scheduling

- [https://github.com/aspnetrun/run-aspnetcore](https://github.com/aspnetrun/run-aspnetcore) - AspNetRun
	> A starter kit for your next ASP.NET Core web application. Boilerplate for ASP.NET Core reference application, demonstrating a layered application architecture with applying Clean Architecture and DDD
	
- [https://github.com/aspnetrun/run-aspnetcore-cqrs](https://github.com/aspnetrun/run-aspnetcore-cqrs) - AspNetRun
	> Real world Enterprise CRM application example of ASP.NET Core + Angular web application. Implemented CQRS Design Pattern for ASP.NET Core + Angular reference application, demonstrating a layered application architecture with DDD

- [https://github.com/aspnetrun/run-aspnetcore-realworld](https://github.com/aspnetrun/run-aspnetcore-realworld) - AspNetRun
	> E-Commerce real world example of run-aspnetcore ASP.NET Core web application. Implemented e-commerce domain with clean architecture for ASP.NET Core reference application, demonstrating a layered application architecture with DDD best practices.

- [https://github.com/jacobduijzer/CleanArchitectureTemplate](https://github.com/jacobduijzer/CleanArchitectureTemplate)
	> A template for a dotnet core api / mvc "clean architecture" project.

- [https://github.com/CanerPatir/aspnet-core-clean-arch](https://github.com/CanerPatir/aspnet-core-clean-arch)
	> It is a clean architecture project template which is based on hexagonal-architecture principles built with .Net core.
	
- [https://github.com/techtribesje/techtribesje](https://github.com/techtribesje/techtribesje)

- [https://github.com/thombergs/buckpal](https://github.com/thombergs/buckpal)
	> An example approach for implementing a Clean/Hexagonal Architecture

#### Books
- [Get Your Hands Dirty on Clean Architecture](https://www.packtpub.com/product/get-your-hands-dirty-on-clean-architecture/9781839211966)

### Onion Architecture

#### 📝 Articles

- [Onion Architecture In ASP.NET Core With CQRS – Detailed](https://codewithmukesh.com/blog/onion-architecture-in-aspnet-core/) - CodeWithMukesh
- [Onion Architecture](https://herbertograca.com/2017/09/21/onion-architecture/) - Herberto Graca
- [The Onion Architecture : part 1](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1) - Jeffrey Palermo
- [The Onion Architecture : part 2](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-2) - Jeffrey Palermo
- [The Onion Architecture : part 3](https://jeffreypalermo.com/2008/08/the-onion-architecture-part-3) - Jeffrey Palermo
- [Onion Architecture: Part 4 – After Four Years](https://jeffreypalermo.com/2013/08/onion-architecture-part-4-after-four-years/) - Jeffrey Palermo
- [Understanding Onion Architecture](https://www.codeguru.com/csharp/csharp/cs_misc/designtechniques/understanding-onion-architecture.html) - Code Guru
- [Clean architecture series — Part 2](https://dev.to/pereiren/clean-architecture-series-part-2-49db) - David Pereira
- [A simple template for Onion Architecture with .NET 5](https://dev.to/pereiren/a-simple-template-for-onion-architecture-with-net-5-3gll) - David Pereira
- [Peeling Back the Onion Architecture](https://blog.tonysneed.com/2011/10/08/peeling-back-the-onion-architecture/) - Tony Sneed

#### 📹 Videos

- [Distributed Onion Architecture - Fort Worth .Net User Group 8/20/2013 - Jeffrey Palermo](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=uuCaXu_kl0U)

#### 🔖 Samples
- [https://github.com/Amitpnk/Onion-architecture-ASP.NET-Core](https://github.com/Amitpnk/Onion-architecture-ASP.NET-Core)
	> WhiteApp API solution template which is built on Onion Architecture with all essential feature using .NET Core!
	
- [https://github.com/pereiren/dotnet-template-onion](https://github.com/pereiren/dotnet-template-onion)
	> Onion Architecture with .NET 5/.NET Core and CQRS/Event Sourcing following a DDD approach	
	
### Ports And Adapters Architecture (Hexagonal Architecture)

#### 📝 Articles

- [Ports & Adapters Architecture](https://herbertograca.com/2017/09/14/ports-adapters-architecture/) - Herberto Graca
- [DDD, Hexagonal, Onion, Clean, CQRS, … How I put it all together](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/) - Herberto Graca
- [Hexagonal architecture](http://web.archive.org/web/20180422210157/http://alistair.cockburn.us/Hexagonal+Architecture) - Alistair Cockburn
- [Hexagonal (Ports & Adapters) Architecture](https://medium.com/@TKonuklar/hexagonal-ports-adapters-architecture-e3617bcf00a0) - Tugce Konuklar
- [Hexagonal Architecture: the practical guide for a clean architecture](https://beyondxscratch.com/2017/08/19/hexagonal-architecture-the-practical-guide-for-a-clean-architecture/) - Beyond x Scratch
- [Hexagonal Architecture Example: digging a Spring Boot implementation](https://beyondxscratch.com/2020/08/23/hexagonal-architecture-example-digging-a-spring-boot-implementation/) - Beyond x Scratch
- [HEXAGONAL ARCHITECTURE](https://www.qwan.eu/2020/08/20/hexagonal-architecture.html) - qwan
- [SLICING YOUR CAKE - STRUCTURING YOUR HEXAGONS](https://www.qwan.eu/2021/02/15/slicing-your-cake.html) - qwan
- [Hexagonal Architecture demystified](https://madewithlove.com/blog/software-engineering/hexagonal-architecture-demystified/)
- [Clean architecture series— Part 1](https://pereiren.medium.com/clean-architecture-series-part-1-f34ef6b04b62)
- [Implementing Hexagonal Ports and Adapters Architectural Style](https://amanagrawal.blog/2018/11/17/implementing-hexagonal-ports-and-adapters-architectural-style/)
- [Hexagonal Architecture Style](https://github.com/ivanpaulovich/clean-architecture-manga/wiki/Architecture-Styles#ports-and-adapters-architecture-style) - Ivan Paulovich
- [Ports & Adapters architecture on example](https://wkrzywiec.medium.com/ports-adapters-architecture-on-example-19cab9e93be7)
- [Hexagonal Architecture with Java and Spring](https://reflectoring.io/spring-hexagonal/)
- [Layers, Onions, Ports, Adapters: it's all the same](https://blog.ploeh.dk/2013/12/03/layers-onions-ports-adapters-its-all-the-same/)
- [Ready for changes with Hexagonal Architecture](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749)
- [Hexagonal Architecture](https://fideloper.com/hexagonal-architecture) - Chris Fidao
- [What is Hexagonal Architecture?](https://culttt.com/2014/12/31/hexagonal-architecture/) - PHILIP BROWN
- [Hexagonal != Layers](https://tpierrain.blogspot.com/2016/04/hexagonal-layers.html)
- [Domain-Driven Design and the Hexagonal Architecture](https://vaadin.com/learn/tutorials/ddd/ddd_and_hexagonal)

#### 📹 Videos

- [Chris Fidao - Hexagonal Architecture](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=6SBjKOwVq0o)
- [Hexagonal, Onion, and Explicit Architecture with Elixir - Part 1](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=iGTCZt9Z8A8)

#### 🔖 Samples
- [https://github.com/Sairyss/domain-driven-hexagon](https://github.com/Sairyss/domain-driven-hexagon)
	> Guide on Domain-Driven Design, Hexagonal architecture, best practices etc.
	
- [https://github.com/ivanpaulovich/hexagonal-architecture-acerola](https://github.com/ivanpaulovich/hexagonal-architecture-acerola) - Ivan Paulovich
	> An Hexagonal Architecture service template with DDD, CQRS, TDD and SOLID using .NET Core 2.0. All small features are testable and could be mocked. Adapters could be mocked or exchanged.

- [https://github.com/ivanpaulovich/clean-architecture-manga](https://github.com/ivanpaulovich/clean-architecture-manga) - Ivan Paulovich
	> Clean Architecture with .NET5, C#9 and React+Redux. Use cases as central organizing structure, completely testable, decoupled from frameworks

- [https://github.com/CanerPatir/aspnet-core-clean-arch](https://github.com/CanerPatir/aspnet-core-clean-arch)
	> It is a clean architecture project template which is based on hexagonal-architecture principles built with .Net core.
	
- [https://github.com/Lunch-box/SimpleOrderRouting](https://github.com/Lunch-box/SimpleOrderRouting)
	> Prototype of a Smart Order Routing system (finance). The opportunity for a mob of Lunch-boxers, to explore various technical approaches in reactive programming.
	
### Vertical Slice Architecture

#### 📝 Articles
- [Vertical Slice Architecture](https://jimmybogard.com/vertical-slice-architecture/) - Jimmy Bogard
- [Why vertical slice architecture is better—if you know these few things](https://headspring.com/2019/11/05/why-vertical-slice-architecture-is-better/)
- [Architecting for maintainability through Vertical Slices ](https://www.ghyston.com/insights/architecting-for-maintainability-through-vertical-slices/)
- [Package by component and architecturally-aligned testing](http://www.codingthearchitecture.com/2015/03/08/package_by_component_and_architecturally_aligned_testing.html)
- [Vertical Slices Application Design with MediatR: Part 1](https://www.ojdevelops.com/2017/08/vertical-slices-with-mediatr.html)
- [Vertical Slices Application Design with MediatR: Part 2](https://www.ojdevelops.com/2017/09/vertical-slices-with-mediatr-part2.html)
- [Organizing Code by Feature using Vertical Slices](https://codeopinion.com/organizing-code-by-feature-using-vertical-slices/) - CodeOpinion
- [Vertical slices in ASP.NET MVC](https://www.kenneth-truyers.net/2016/02/02/vertical-slices-in-asp-net-mvc/)
- [Coding: Packaging by vertical slice](https://markhneedham.com/blog/2012/02/20/coding-packaging-by-vertical-slice/)

#### 📹 Videos
- [Vertical Slice Architecture - Jimmy Bogard](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=5kOzZz2vj2o) - Jimmy Bogard
- [SOLID Architecture in Slices not Layers](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=wTd-VcJCs_M) - Jimmy Bogard
- [DevTernity 2019: Jimmy Bogard – Vertical Slice Architecture](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=T6nglsEDaqA) - Jimmy Bogard

#### Samples
- [https://github.com/jbogard/ContosoUniversityDotNetCore-Pages](https://github.com/jbogard/ContosoUniversityDotNetCore-Pages) - Jimmy Bogard
- [https://github.com/dcomartin/MusicStore](https://github.com/dcomartin/MusicStore) - CodeOpinion
### Event Driven Architecture

#### 📝 Articles
- [Event-driven architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven)
- [Event-Driven Architecture](https://herbertograca.com/2017/10/05/event-driven-architecture/) - Herberto Graca
- [Journey to Event Driven – Part 1: Why Event-First Programming Changes Everything](https://www.confluent.io/blog/journey-to-event-driven-part-1-why-event-first-thinking-changes-everything/)
- [Journey to Event Driven – Part 2: Programming Models for the Event-Driven Architecture](https://www.confluent.io/blog/journey-to-event-driven-part-2-programming-models-event-driven-architecture/)
- [Journey to Event Driven – Part 3: The Affinity Between Events, Streams and Serverless](https://www.confluent.io/blog/journey-to-event-driven-part-3-affinity-between-events-streams-serverless/)
- [Journey to Event Driven – Part 4: Four Pillars of Event Streaming Microservices](https://www.confluent.io/blog/journey-to-event-driven-part-4-four-pillars-of-event-streaming-microservices/)
- [Event Driven Systems](https://medium.com/omarelgabrys-blog/event-driven-systems-cdbe5a4b3d04)
- [Events on the outside, on the inside and at the core](https://chrisrichardson.net/post/microservices/2021/02/21/events-are-the-core.html)

#### Videos
- [Event-Driven Architecture | EDA | Software Architectural Patterns](https://www.youtube.com/watch?v=gIL8rW_eyww&t=0s) - The TechCave
- [Events on the outside, on the inside and at the core](https://www.youtube.com/watch?v=rP-InttAbVY)
- [GOTO 2017 • The Many Meanings of Event-Driven Architecture • Martin Fowler](https://www.youtube.com/watch?v=STKCRSUsyP0)

### Service Oriented Architecture

#### 📝 Articles
- [Service Oriented Architecture (SOA)](https://herbertograca.com/2017/11/09/service-oriented-architecture-soa/)

#### 📹 Videos
- [Service-Oriented Architecture - SOA | Software/Web Application Architecture](https://www.youtube.com/watch?v=jNiEMmoTDoE&t=0s) - The TechCave

## Architectural Design Principles

### Resources
- [Architectural Styles vs. Architectural Patterns vs. Design Patterns](https://herbertograca.com/2017/07/28/architectural-styles-vs-architectural-patterns-vs-design-patterns/)
- [Architectural principles](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) - Microsoft
- [Principles](https://deviq.com/principles/principles-overview) - DevIQ
- [10 Crucial Software Development Principles to Live By](https://www.laneways.agency/software-development-principles/)
- [10 OOP Design Principles Every Programmer Should Know](https://hackernoon.com/10-oop-design-principles-every-programmer-should-know-f187436caf65)
- [Design Principles](https://java-design-patterns.com/principles/) - java-design-patterns.com
- [Principles](http://principles-wiki.net/principles:start) - principles-wiki.net

### Dependency Inversion

#### 📹 Videos
- [The refactoring test (1) - Dependency Inversion & Unit tests | Cracking the .NET interview](https://www.youtube.com/watch?v=U3QvTaw224o)

### Open/Closed Principles

#### 📹 Videos
- [The refactoring test (2) - Open-Closed, Single Responsibility | Cracking the .NET interview](https://www.youtube.com/watch?v=Yd4GnWeEkIY)

### Cross Cutting Concerns

#### 📝 Articles
- [Crosscutting Concerns](https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ee658105(v=pandp.10)) - Microsoft
- [A Brief Intro to Clean Architecture, Clean DDD, and CQRS](https://blog.jacobsdata.com/2020/02/19/a-brief-intro-to-clean-architecture-clean-ddd-and-cqrs) - Jacobs Data
- [Managing Cross Cutting Concerns – Logging](https://www.cshandler.com/2015/10/managing-cross-cutting-concerns-logging.html)
- [Cross cutting concern example](https://stackoverflow.com/questions/23700540/cross-cutting-concern-example)
- [cross cutting concern](https://medium.com/anatta-design/cross-cutting-concern-aadf4f51a5c1)
- [Cross-Cutting Concerns for An Enterprise Application](https://dzone.com/articles/cross-cutting-concerns-for-an-enterprise-applicati)
- [Terminology: cross cutting concern](https://crosscuttingconcerns.com/Terminology-cross-cutting-concern)
- [Crosscutting Concerns](https://oncodedesign.com/crosscutting-concerns/)
- [Using the Decorator Pattern to handle cross-cutting concerns](https://www.davideguida.com/using-decorators-to-handle-cross-cutting-concerns/)
- [Chain of Responsibility pattern for handling cross-cutting concerns](https://arturkrajewski.silvrback.com/chain-of-responsibility-pattern-for-handling-cross-cutting-concerns)

### KISS

#### 📝 Articles
- [KISS](https://java-design-patterns.com/principles/#kiss)  - java-design-patterns
- [Principles of Good Programming](https://www.artima.com/weblogs/viewpost.jsp?thread=331531)
- [Keep It Simple Stupid (KISS)](http://principles-wiki.net/principles:keep_it_simple_stupid) - principles-wiki
- [Keep It Simple](https://deviq.com/principles/keep-it-simple) - DevIQ

### YAGNI

#### 📝 Articles
- [YAGNI](https://deviq.com/principles/yagni) - DevIQ
- [YAGNI](https://java-design-patterns.com/principles/#yagni) - java-design-patterns

### Minimize Coupling

#### 📝 Articles
- [Why is loose coupling between services so important?](https://www.ben-morris.com/why-is-loose-coupling-between-services-so-important/) - Ben Morris

### Persistence Ignorance

#### 📝 Articles
- [Persistence Ignorance](https://deviq.com/principles/persistence-ignorance) - DevIQ
- [Understanding Persistence Ignorance Principle](http://techxposer.com/2018/12/29/understanding-persistence-ignorance-principle/)
- [ Infrastructure Ignorance](https://ayende.com/blog/3137/infrastructure-ignorance) - Ayende

### GRASP

#### 📝 Articles
- [GRASP – General Responsibility Assignment Software Patterns Explained](https://www.kamilgrzybek.com/design/grasp-explained/)

## Design Patterns

### Service Locator

#### 📝 Articles
- [Service Locator is an Anti-Pattern](https://blog.ploeh.dk/2010/02/03/ServiceLocatorisanAnti-Pattern/)
- [The Service Locator Anti-Pattern](https://freecontent.manning.com/the-service-locator-anti-pattern/)
### Resources 

- [https://github.com/abishekaditya/DesignPatterns](https://github.com/abishekaditya/DesignPatterns)
	> Project : Design Patterns Examples in C#
	
- [https://github.com/anupavanm/csharp-design-patterns-for-humans](https://github.com/anupavanm/csharp-design-patterns-for-humans)
	> Design Patterns for Humans™ - An ultra-simplified explanation - C# Examples
	
- [https://github.com/nemanjarogic/DesignPatternsLibrary](https://github.com/nemanjarogic/DesignPatternsLibrary)
	> A comprehensive design patterns library implemented in C#, which covers various design patterns from the most commonly used ones to the lesser-known ones. Get familiar with and learn design patterns through moderately realistic examples.

### Specification Pattern

#### 📝 Articles
- [Specification pattern: C# implementation](https://enterprisecraftsmanship.com/posts/specification-pattern-c-implementation/) - Vladimir Khorikove
- [Implementing Query Specification pattern in Entity Framework Core](https://gunnarpeipman.com/ef-core-query-specification/) - Gunnar Peipman
- [Using the Specification pattern with Repository and Unit of work](https://dotnetfalcon.com/using-the-specification-pattern-with-repository-and-unit-of-work/) - Akos Nagy

### Repository Pattern

#### 📝 Articles
- [No need for repositories and unit of work with Entity Framework Core](https://gunnarpeipman.com/ef-core-repository-unit-of-work/) - Gunnar Peipman
- [Repository and unit of work ARE useful](https://dotnetfalcon.com/repository-and-unit-of-work-are-useful/) - Akos Nagy
- [The generic repository is just a lazy anti-pattern](https://www.ben-morris.com/why-the-generic-repository-is-just-a-lazy-anti-pattern/)
- [The Repository Pattern isn’t an Anti-Pattern; You’re just doing it wrong.](https://brianbu.com/2019/09/25/the-repository-pattern-isnt-an-anti-pattern-youre-just-doing-it-wrong/)
- [The Generic Repository Is An Anti-Pattern](https://blog.sapiensworks.com/post/2012/03/05/The-Generic-Repository-Is-An-Anti-Pattern.aspx)
- [Repository Pattern in .Net Core](https://www.programmingwithwolfgang.com/repository-pattern-net-core/)
- [DDD: The Generic Repository](http://codebetter.com/gregyoung/2009/01/16/ddd-the-generic-repository/)
- [Creating A Generic Repository](https://medium.com/@morgankenyon/tinroll-4-creating-a-generic-repository-9846c72e11ec)
- [Repository is Dead: Long Live Repository](http://codebetter.com/gregyoung/2009/04/23/repository-is-dead-long-live-repository/)
- [More on Repository](http://codebetter.com/gregyoung/2009/04/24/more-on-repository/)

## Cloud Design Patterns

### Resources
 - [Cloud Design Patterns](https://docs.microsoft.com/en-us/azure/architecture/patterns/index-patterns) - Microsoft
 - [Cloud Computing Patterns](https://www.cloudcomputingpatterns.org) - CloudComputingPatterns
 
###  Anti-Corruption Layer Pattern

#### 📝 Articles
- [Anti-Corruption Layer pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)
- [Gateway](https://martinfowler.com/eaaCatalog/gateway.html)
- [The Anti-Corruption Layer Pattern](https://dev.to/asarnaout/the-anti-corruption-layer-pattern-pcd)
- [Anti-Corruption Layer: How to Keep Legacy Support from Breaking New Systems](https://www.cloudbees.com/blog/anti-corruption-layer-how-keep-legacy-support-breaking-new-systems)

#### 📹 Videos
- [The Anti-corruption layer, Gateway Aggregation / Routing patterns | Cloud with Chris](https://www.youtube.com/watch?v=gGDu4FdUk7I)

### Gateway Pattern

#### Articles
- [Gateway Aggregation pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation)
- [Gateway Offloading pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-offloading)

###  Asynchronous Request-Reply pattern

###  Cache-Aside

###  Command and Query Responsibility Segregation (CQRS)

###  Circuit Breaker

###  Gateway Aggregation

###  Gateway Offloading

###  Gateway Routing

###  Priority Queue

###  Publisher/Subscriber

###  Retry

###  Saga

###  Sharding

###  Sidecar

###  Throttling

###  Valet Key

### At-least-Once Delivery (Outbox Pattern)

#### 📝 Articles
- [At-least-once Delivery](https://www.cloudcomputingpatterns.org/at_least_once_delivery/) - cloudcomputingpatterns.org
- [The Outbox Pattern](http://www.kamilgrzybek.com/design/the-outbox-pattern/) - Kamil Grzybek
### Exactly-Once Delivery

#### 📝 Articles

- [Exactly-once Delivery](https://www.cloudcomputingpatterns.org/exactly_once_delivery/) - cloudcomputingpatterns.org


## Architectural Patterns

### Resources

### 📹 Videos
- [Software Architecture | Architectural patterns | Architecture vs Design pattern](https://www.youtube.com/watch?v=lTkL1oIMiaU&t=769s)


### Domain Driven Design - Domain Centric 

#### 📝 Articles
- [Design a DDD-oriented microservice](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice) - Microsoft
- [PPPDDD.1 – What is Domain Driven Design?](https://herbertograca.com/2016/08/15/pppddd-1-what-is-domain-driven-design/) - Herberto Graca
- [PPPDDD.2 – Distilling the Problem Domain](https://herbertograca.com/2016/08/22/pppddd-2-distilling-the-problem-domain/) - Herberto Graca
- [PPPDDD.3 – Focusing on the Core Domain](https://herbertograca.com/2016/10/03/pppddd-3-focusing-on-the-core-domain/) - Herberto Graca
- [A Brief Intro to Clean Architecture, Clean DDD, and CQRS](https://blog.jacobsdata.com/2020/02/19/a-brief-intro-to-clean-architecture-clean-ddd-and-cqrs) - Jacobs Data
- [A Basic Intro to Domain-Driven Design](https://blog.jacobsdata.com/2020/02/10/a-basic-intro-to-domain-driven-design) - Jacobs Data
- [A Template for Clean Domain-Driven Design Architecture](https://blog.jacobsdata.com/2020/03/02/a-clean-domain-driven-design-architectural-template) - Jacobs Data
- [Tackling Complexity in the Heart of DDD](https://vladikk.com/2016/04/05/tackling-complexity-ddd/) - Vladik Khononov
- [Strategic Domain-Driven Design](https://vaadin.com/learn/tutorials/ddd/strategic_domain_driven_design)
- [A Basic Intro to Domain-Driven Design](https://medium.com/software-alchemy/a-basic-intro-to-domain-driven-design-bca832c09e9d)
- [DDD and avoiding CRUD](https://stackoverflow.com/questions/23970567/ddd-and-avoiding-crud)
- [Domain-centric vs data-centric approaches to software development](https://enterprisecraftsmanship.com/posts/domain-centric-vs-data-centric-approaches/)
- [Experiences Going From Data-Driven Development to Domain-Driven Design](https://www.infoq.com/news/2013/10/data-driven-to-ddd/)
- [Domain-Driven Design: What is it and how do you use it?](https://airbrake.io/blog/software-design/domain-driven-design)
- [Data Points - Coding for Domain-Driven Design: Tips for Data-Focused Devs](https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/august/data-points-coding-for-domain-driven-design-tips-for-data-focused-devs)
- [Data Points - Coding for Domain-Driven Design: Tips for Data-Focused Devs, Part 2](https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/september/data-points-coding-for-domain-driven-design-tips-for-data-focused-devs-part-2)
- [Data Points - Coding for Domain-Driven Design: Tips for Data-Focused Devs, Part 3](https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/october/data-points-coding-for-domain-driven-design-tips-for-data-focused-devs-part-3)
- [Domain-centric Architectures are Cool, but Why ?](https://blog.cancobanoglu.net/2017/05/11/domain-centric-architectures-are-cool-but-why/)
- [Clean Architecture : Part 1 – Database vs Domain](https://crosp.net/blog/software-architecture/clean-architecture-part-1-databse-vs-domain/)
- [Domain Centric Architecture ve Domain Driven Design](http://cagataykiziltan.net/tr/domain-centric-architecture-ve-domain-driven-design/)
- [AVOID Entity Services by Focusing on Capabilities](https://codeopinion.com/avoid-entity-services-by-focusing-on-capabilities/)

#### 📹 Videos
- [Java EE: Design Patterns and Architecture](https://www.linkedin.com/learning/java-ee-design-patterns-and-architecture/advantages-and-disadvantages-4)
- [AVOID Entity Services by Focusing on Capabilities](https://www.youtube.com/watch?v=2gOOstEI4vU)
#### Value Objects

##### 📝 Articles
- [Treating Primitive Obsession with ValueObjects | DDD in .NET](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=h4uldNA1JUE)
- [Implement value objects](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/implement-value-objects)

#### Domain 

##### 📝 Articles
- [Always-Valid Domain Model](https://enterprisecraftsmanship.com/posts/always-valid-domain-model/) - Vladimir Khorikove
- [Domain Model Encapsulation and PI with Entity Framework 2.2](http://www.kamilgrzybek.com/design/domain-model-encapsulation-and-pi-with-entity-framework-2-2/) - Kamil Grzybek
- [Attributes of Clean Domain Model](http://www.kamilgrzybek.com/design/clean-domain-model-attributes/) - Kamil Grzybek
- [Are CQRS commands part of the domain model?](https://enterprisecraftsmanship.com/2019/01/31/cqrs-commands-part-domain-model/) - Vladimir Khorikove
- [Domain model purity vs. domain model completeness](https://enterprisecraftsmanship.com/posts/domain-model-purity-completeness/) - Vladimir Khorikove
- [Design validations in the domain model layer](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-model-layer-validations) - Microsoft
- [Seedwork (reusable base classes and interfaces for your domain model)](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/seedwork-domain-model-base-classes-interfaces) -Microsoft
- [Implement a microservice domain model with .NET](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/net-core-microservice-domain-model) - Microsoft
- [Domain Command Patterns - Validation](https://jimmybogard.com/domain-command-patterns-validation/) - Jimmy Bogard
- [Domain Command Patterns - Handlers](https://jimmybogard.com/domain-command-patterns-handlers/) - Jimmy Bogard
- [Attributes of Clean Domain Model](https://www.kamilgrzybek.com/design/clean-domain-model-attributes/)
- [Domain Model Encapsulation and PI with Entity Framework 2.2](https://www.kamilgrzybek.com/design/domain-model-encapsulation-and-pi-with-entity-framework-2-2/) - Kamil Grzybek

##### 📹 Videos
- [AVOID Entity Services by Focusing on Capabilities](https://www.youtube.com/watch?v=2gOOstEI4vU) - CodeOpinion


#### Bounded Context

##### 📝 Articles
- [Context is King: Finding Service Boundaries](https://codeopinion.com/context-is-king-finding-service-boundaries/)
- [Defining Service Boundaries by Splitting Entities](https://codeopinion.com/defining-service-boundaries-by-splitting-entities/)
- [BoundedContext](https://martinfowler.com/bliki/BoundedContext.html)
##### 📹 Videos
- [Context is King | Finding Service Boundaries Talk](https://www.youtube.com/watch?v=dnhshUdRW70)
- [Defining Service Boundaries by Splitting Entities](https://www.youtube.com/watch?v=lGvYHmvXiyk)

#### Domain Service

##### 📝 Articles

#### Application Service

##### 📝 Articles
- [Domain services vs Application services](https://enterprisecraftsmanship.com/2016/09/08/domain-services-vs-application-services/) - Vladimir Khorikove
- [Implement the microservice application layer using the Web API](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-application-layer-implementation-web-api) - Microsoft

#### Domain Events

##### 📝 Articles
- [How to publish and handle Domain Events](http://www.kamilgrzybek.com/design/how-to-publish-and-handle-domain-events/) - Kamil Grzybek
- [Handling Domain Events: Missing Part](http://www.kamilgrzybek.com/design/handling-domain-events-missing-part/) - Kamil Grzybek
- [Domain events: design and implementation](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation) - Microsoft
- [Events on the outside, on the inside and at the core](https://chrisrichardson.net/post/microservices/2021/02/21/events-are-the-core.html)

#### Infrastructure

- [Design the infrastructure persistence layer](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design) - Microsoft
- [Implement the infrastructure persistence layer with Entity Framework Core](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-implementation-entity-framework-core) - Microsoft
- [Use NoSQL databases as a persistence infrastructure](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/nosql-database-persistence-infrastructure) - Microsoft

#### Aggregation

##### 📝 Articles
- [Processing multiple aggregates – transactional vs eventual consistency](https://www.kamilgrzybek.com/design/processing-multiple-aggregates-transactional-vs-eventual-consistency/) - Kamil Grzybek
- [Aggregate (Root) Design: Behavior & Data](https://codeopinion.com/aggregate-root-design-behavior-data/?utm_source=feedly&utm_medium=rss&utm_campaign=aggregate-root-design-behavior-data) - CodeOpinion

##### 📹 Videos
- [Aggregate (Root) Design: Separate Behavior & Data for Persistence](https://www.youtube.com/watch?v=GtWVGJp061A) - CodeOpinion

#### Domain Primitives

##### 📝 Articles
- [My Take On Domain Primitives](https://svenhuebner-it.com/my-take-on-domain-primitives/) - Sven Hübner
- [Domain Primitives I: easily declaring domain primitives](https://svenhuebner-it.com/domain-primitives-i-easily-declaring-domain-primitives/) - Sven Hübner 

#### 🔖 Samples

- [https://github.com/dotnet-architecture/eShopOnContainers](https://github.com/dotnet-architecture/eShopOnContainers)
    > Cross-platform .NET sample microservices and container based application that runs on Linux Windows and macOS. Powered by .NET 5, Docker Containers and Azure Kubernetes Services. Supports Visual Studio, VS for Mac and CLI based environments with Docker CLI, dotnet CLI, VS Code or any other code editor.

- [https://github.com/kimcu-on-thenet/ddd-net-ef-core](https://github.com/kimcu-on-thenet/ddd-net-ef-core)
    > Self study: DDD, .net core, entity framework core

- [https://github.com/thangchung/blog-core](https://github.com/thangchung/blog-core) - Thang Chung
    > Modular blog using Blazor with clean domain-driven design patterns

- [https://github.com/thangchung/practical-clean-ddd](https://github.com/thangchung/practical-clean-ddd) Thang Chung
    > The repository uses the eCommerce business domain to demonstrate how to apply Domain Driven Design, Clean Architecture, and Microservice Architecture patterns.

- [https://github.com/ardalis/ddd-guestbook](https://github.com/ardalis/ddd-guestbook) - Steve Smith
    > A DDD guestbook example written for ASP.NET Core
	
- [https://github.com/aspnetrun/run-aspnetcore](https://github.com/aspnetrun/run-aspnetcore) - AspNetRun
	> A starter kit for your next ASP.NET Core web application. Boilerplate for ASP.NET Core reference application, demonstrating a layered application architecture with applying Clean Architecture and DDD

- [https://github.com/aspnetrun/run-aspnetcore-realworld](https://github.com/aspnetrun/run-aspnetcore-realworld) - AspNetRun
	> E-Commerce real world example of run-aspnetcore ASP.NET Core web application. Implemented e-commerce domain with clean architecture for ASP.NET Core reference application, demonstrating a layered application architecture with DDD best practices.

- [https://github.com/itlibrium/DDD-starter-dotnet](https://github.com/itlibrium/DDD-starter-dotnet)
	> Sample implementation and comparison of various approaches to building DDD applications. Useful as a baseline to quickly start a DDD dot net project.

- [https://github.com/JacobsDataSolutions/OrgManager](https://github.com/JacobsDataSolutions/OrgManager)
    > CQRS and Clean Domain-Driven Design concepts on the ASP.NET Core stack. Demo application for a fictional corporate organization management tool.

- [https://github.com/anjoy8/ChristDDD](https://github.com/anjoy8/ChristDDD)

- [https://github.com/ddd-by-examples/library](https://github.com/ddd-by-examples/library)
	> A comprehensive Domain-Driven Design example with problem space strategic analysis and various tactical patterns.
	
### Data Driven Design (Data Centric)

#### 📝 Articles
- [Creating a simple data-driven CRUD microservice](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/data-driven-crud-microservice)
- [Domain-centric Architectures are Cool, but Why ?](https://blog.cancobanoglu.net/2017/05/11/domain-centric-architectures-are-cool-but-why/)
- [Domain-centric vs data-centric approaches to software development](https://enterprisecraftsmanship.com/posts/domain-centric-vs-data-centric-approaches/)
- [Clean Architecture : Part 1 – Database vs Domain](https://crosp.net/blog/software-architecture/clean-architecture-part-1-databse-vs-domain/)
- [Domain Centric Architecture ve Domain Driven Design](http://cagataykiziltan.net/tr/domain-centric-architecture-ve-domain-driven-design/)
- [AVOID Entity Services by Focusing on Capabilities](https://codeopinion.com/avoid-entity-services-by-focusing-on-capabilities/)
#### 📹 Videos
- [Creating N-Tier Applications in C#, Part 1](https://www.pluralsight.com/courses/n-tier-apps-part1)
- [Java EE: Design Patterns and Architecture](https://www.linkedin.com/learning/java-ee-design-patterns-and-architecture)
- [AVOID Entity Services by Focusing on Capabilities](https://www.youtube.com/watch?v=2gOOstEI4vU)
- [Decomposing CRUD to a Task Based UI](https://www.youtube.com/watch?v=DjZepWrAKzM)
### CQRS

#### 📝 Articles
- [Command and Query Responsibility Segregation (CQRS) pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs) - Microsoft
- [Simple CQRS implementation with raw SQL and DDD](http://www.kamilgrzybek.com/design/simple-cqrs-implementation-with-raw-sql-and-ddd/) - Kamil Grzybek
- [Implement reads/queries in a CQRS microservice](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/cqrs-microservice-reads) - Microsoft
- [Some thoughts on using CQRS without Event Sourcing](https://medium.com/@mbue/some-thoughts-on-using-cqrs-without-event-sourcing-938b878166a2)
- [Tackling Complexity in CQRS](https://vladikk.com/2017/03/20/tackling-complexity-in-cqrs/) - Vladik Khononov
- [From CQS to CQRS](https://herbertograca.com/2017/10/19/from-cqs-to-cqrs/)
- [Building a robust CQRS database with EF Core and Cosmos DB](https://www.thereformedprogrammer.net/building-a-robust-cqrs-database-with-ef-core-and-cosmos-db/)
- [EF Core – Combining SQL and NoSQL databases for better performance](https://www.thereformedprogrammer.net/ef-core-combining-sql-and-nosql-databases-for-better-performance/)
- [CQRS facts and myths explained](https://event-driven.io/en/cqrs_facts_and_myths_explained/) - Oskar Dudycz
- [CQRS](https://web.archive.org/web/20160729165044/https://goodenoughsoftware.net/2012/03/02/cqrs/) - Greg Young
- [CQRS, Task Based UIs, Event Sourcing agh!](http://codebetter.com/gregyoung/2010/02/16/cqrs-task-based-uis-event-sourcing-agh/) - Greg Young
- [Command Query Separation?](http://codebetter.com/gregyoung/2009/08/13/command-query-separation/) - Greg Young
- [What is CQRS?](http://cqrs.nu/Faq/command-query-responsibility-segregation)
- [Task-Based UI](https://cqrs.wordpress.com/documents/task-based-ui/)
#### 📹 Videos
- [Java EE: Design Patterns and Architecture](https://www.linkedin.com/learning/java-ee-design-patterns-and-architecture/advantages-and-disadvantages-4)
- [Decomposing CRUD to a Task Based UI](https://www.youtube.com/watch?v=DjZepWrAKzM)
- [CQRS Myths | 3 Most Common Misconceptions](https://www.youtube.com/watch?v=O9qpcZt6jW0&t=77s)

#### 🔖 Samples

- [https://github.com/kgrzybek/sample-dotnet-core-cqrs-api](https://github.com/kgrzybek/sample-dotnet-core-cqrs-api) - Kamil Grzybek
	> Sample .NET Core REST API CQRS implementation with raw SQL and DDD using Clean Architecture.
	
- [https://github.com/aspnetrun/run-aspnetcore-cqrs](https://github.com/aspnetrun/run-aspnetcore-cqrs) - AspNetRun
	> Real world Enterprise CRM application example of ASP.NET Core + Angular web application. Implemented CQRS Design Pattern for ASP.NET Core + Angular reference application, demonstrating a layered application architecture with DDD

- [https://github.com/tpierrain/CQRS](https://github.com/tpierrain/CQRS)
	> A simple project to explain CQRS during a live coding session at MS experiences'16
	
- [https://github.com/anjoy8/ChristDDD](https://github.com/anjoy8/ChristDDD)


### Event Sourcing

#### 📝 Articles 
- [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) - Martin Fowler
- [About event sourcing](https://eventuate.io/whyeventsourcing.html) - eventuate.io
- [Event Sourcing pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing) - Microsoft
- [Event Sourcing Example & Explained in plain English](https://codeopinion.com/event-sourcing-example-explained-in-plain-english/?utm_source=feedly&utm_medium=rss&utm_campaign=event-sourcing-example-explained-in-plain-english) - CodeOpinion
- [Event Sourcing with Azure SQL and Entity Framework Core](https://daniel-krzyczkowski.github.io/Event-Sourcing-With-Azure-SQL-And-Entity-Framework-Core/)
- [Projections in Event Sourcing: Build ANY model you want!](https://codeopinion.com/projections-in-event-sourcing-build-any-model-you-want)

#### Videos
- [Event Sourcing Example & Explained in plain English](https://www.youtube.com/watch?v=AUj4M-st3ic)
- [Projections in Event Sourcing: Build ANY model you want!](https://www.youtube.com/watch?v=bTRjO6JK4Ws)
- [Event Sourcing: Rehydrating Aggregates with Snapshots](https://www.youtube.com/watch?v=eAIkomEid1Y)
- [Event Sourcing with Azure SQL and Entity Framework Core](https://www.youtube.com/watch?v=-BhDW3GeSqg)

#### Samples
- [https://github.com/PacktPublishing/Hands-On-Domain-Driven-Design-with-.NET-Core](https://github.com/PacktPublishing/Hands-On-Domain-Driven-Design-with-.NET-Core) - Alexey Zimarev

### Microservices Architectural Pattern

#### Resources
- [.NET Microservices Architecture Guidance](https://dotnet.microsoft.com/learn/aspnet/microservices-architecture)
- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore) - A collection of awesome training series, Articles, videos, books, courses, sample projects, and tools for Microservices in .NET Core
- [.NET Microservices: Architecture for Containerized .NET Applications](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/) - Microsoft

#### 📝 Articles
- [Design a microservice-oriented application](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/microservice-application-design)
- [Creating a simple data-driven CRUD microservice](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/data-driven-crud-microservice)
- [Microservices architecture: What the gurus say about it](https://herbertograca.com/2017/01/26/microservices-architecture/)
- [Microservices architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices)
- [Securing Microservices with IdentityServer4, OAuth2 and OpenID Connect fronted by Ocelot API Gateway](https://medium.com/aspnetrun/securing-microservices-with-identityserver4-with-oauth2-and-openid-connect-fronted-by-ocelot-api-49ea44a0cf9e)
- [Saga Pattern: how to manage distributed transactions with microservices](https://www.cncf.io/blog/2021/02/12/saga-pattern-how-to-manage-distributed-transactions-with-microservices)
- [Use NoSQL databases as a persistence infrastructure](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/nosql-database-persistence-infrastructure)
- [When to use the microservice architecture: part 1 - the need to deliver software rapidly, frequently, and reliably](https://chrisrichardson.net/post/microservices/2020/02/18/why-microservices-part-1.html)
- [Why microservices: part 2 - the need for sustainable development](https://chrisrichardson.net/post/microservices/2020/03/30/why-microservices-part-2.html)
- [Why microservices - part 3: two thirds of the success triangle - process and organization](https://chrisrichardson.net/post/microservices/2020/04/11/why-microservices-part-3.html)
- [Why microservices - part 4: the last third of the success triangle: architectural requirements for rapid, frequent, reliable and sustainable development](https://chrisrichardson.net/post/microservices/2020/05/21/why-microservices-part-4.html)
- [When to use the microservice architecture: part 5 - the monolithic architecture and rapid, frequent, reliable and sustainable software delivery](https://chrisrichardson.net/post/microservices/2021/02/14/why-microservices-part-5-monolith.html)

#### 📹 Videos
- [Microservices Architectural Pattern](https://www.youtube.com/watch?v=8BPDv038oMI&t=0s) - The TechCave
- [On .NET Live - Microservice applications with DAPR and .NET](https://www.youtube.com/watch?v=kIfmwmJHNMs)
- [Microservices Architecture and Implementation on .NET 5](https://www.udemy.com/course/microservices-architecture-and-implementation-on-dotnet/?couponCode=FA24745CC57592AB612A)
- [Designing Loosely Coupled Microservices](https://skillsmatter.com/skillscasts/14926-designing-loosely-coupled-microservices)

#### 📦 Tools
- [https://github.com/dotnet/tye](https://github.com/dotnet/tye)
    > Tye is a tool that makes developing, testing, and deploying microservices and distributed applications easier. Project Tye includes a local orchestrator to make developing microservices easier and the ability to deploy microservices to Kubernetes with minimal configuration.

#### 🔖 Samples

- [https://github.com/dotnet-architecture/eShopOnContainers](https://github.com/dotnet-architecture/eShopOnContainers)
    > Cross-platform .NET sample microservices and container based application that runs on Linux Windows and macOS. Powered by .NET 5, Docker Containers and Azure Kubernetes Services. Supports Visual Studio, VS for Mac and CLI based environments with Docker CLI, dotnet CLI, VS Code or any other code editor.

- [https://github.com/vietnam-devs/coolstore-microservices](https://github.com/vietnam-devs/coolstore-microservices) - Thang Chung
    > A full-stack .NET microservices build on Dapr and Tye

- [https://github.com/thangchung/practical-dapr](https://github.com/thangchung/practical-dapr) - Thang Chung
    > A full-stack .NET microservices build on Dapr and Tye

- [https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices](https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices)
    > An example of building .NET Core microservices with Dapr and Tye

- [https://github.com/aspnetrun/run-aspnetcore-microservices](https://github.com/aspnetrun/run-aspnetcore-microservices) - AspNetRun
	> Microservices on .Net platforms which used Asp.Net Web API, Docker, RabbitMQ, Ocelot API Gateway, MongoDB, Redis, SqlServer, Entity Framework Core, CQRS and Clean Architecture implementation. See Microservices Architecture and Step by Step Implementation on .NET Course w/ discount
	
- [https://github.com/aspnetrun/run-aspnet-identityserver4](https://github.com/aspnetrun/run-aspnet-identityserver4) - AspNetRun
	> Secure microservices with using standalone Identity Server 4 and backing with Ocelot API Gateway. Protect our ASP.NET Web MVC and API applications with using OAuth 2 and OpenID Connect in IdentityServer4. Securing your web application and API with tokens, working with claims, authentication and authorization middlewares and applying policies.
	
- [https://github.com/alugili/ModernArchitectureShop](https://github.com/alugili/ModernArchitectureShop) - Bassam Alugili
	> The Microservices Online Shop is an application with a modern software architecture that is cleanly designed and based on.NET lightweight technologies. The shop has two build variations. The first variant is the classic Microservices Architectural Style. The second one is with Dapr. Dapr has a comprehensive infrastructure  
	
- [https://github.com/aspnetrun/run-aspnet-grpc](https://github.com/aspnetrun/run-aspnet-grpc) - AspNetRun
	> Using gRPC in Microservices for Building a high-performance Interservice Communication with .Net 5. See gRPC Microservices and Step by Step Implementation on .NET Course w/ discount->

- [https://github.com/jbossdemocentral/coolstore-microservice](https://github.com/jbossdemocentral/coolstore-microservice)

- [https://github.com/thangchung/practical-clean-ddd](https://github.com/thangchung/practical-clean-ddd)
	> A simplified and effortless approach to get started with Domain-driven Design, Clean Architecture, CQRS, and Microservices patterns
	
- [https://github.com/thangchung/shopping-cart-k8s](https://github.com/thangchung/shopping-cart-k8s)
	> Service Mesh patterns for Microservices
## Serverless Architectural Pattern

### 📹 Videos
- [Serverless Computing](https://www.youtube.com/watch?v=RzsaM6kL1FU&t=0s) - The TechCave


## MicroKernel Architectural Pattern

### 📹 Videos
- [Microkernel Architectural Pattern | Software Architecture](https://www.youtube.com/watch?v=h3icQDMRLd8&t=0s) - The TechCave


## Object Oriented Design

## Distributed Systems Design

### Resources
- [System Design](https://www.youtube.com/playlist?list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - Tech Dummies Narendra L
- [Coding and System Design Interview Questions](https://www.youtube.com/playlist?list=PLA8lYuzFlBqAy6dkZHj5VxUAaqr4vwrka) - Success in Tech
- [System Design](https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX) - Gaurav Sen
- [Basics of System Design](https://www.youtube.com/playlist?list=PLt4nG7RVVk1g_LutiJ8_LvE914rIE5z4u) - Coding Simplified
- [System Design Primer Course](https://www.youtube.com/playlist?list=PLTCrU9sGyburBw9wNOHebv9SjlE4Elv5a) - sudoCODE
- [System Design And Interview](https://www.youtube.com/c/interviewingio/videos) - interviewing.io
- [System Design](https://www.youtube.com/playlist?list=PLhgw50vUymyckXl3D1IlXoVl94wknJfUC) - codeKarle
- [Grokking the System Design Interview](https://www.youtube.com/playlist?list=PL73KFetZlkJSZ9vTDSJ1swZhe6CIYkqTL)
- [https://github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) - Donne Martin
- [https://github.com/checkcheckzz/system-design-interview](https://github.com/checkcheckzz/system-design-interview) - Zach
- [https://github.com/shashank88/system_design](https://github.com/shashank88/system_design) - shashank khare
- [https://github.com/lei-hsia/grokking-system-design](https://github.com/lei-hsia/grokking-system-design) - LEI XIA
- [https://github.com/kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)
- [Preparing for the Systems Design and Coding Interview](https://blog.pragmaticengineer.com/preparing-for-the-systems-design-and-coding-interviews/)
- [System Design Interview](https://www.youtube.com/channel/UC9vLsnF6QPYuH51njmIooCQ)
- [http://highscalability.com/all-time-favorites/](http://highscalability.com/all-time-favorites/)
- [systeminterview](https://courses.systeminterview.com/courses/system-design-interview-an-insider-s-guide?ref=c89a35)
### 📝 Articles
- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html)
- [YouTube Architecture](http://highscalability.com/youtube-architecture)
### 📹 Videos
- [Distributed Computing](https://www.youtube.com/watch?v=ajjOEltiZm4&t=0s) - The TechCave

### Books
- [Software Engineering at Google](https://www.oreilly.com/library/view/software-engineering-at/9781492082781/)
- [System Design Interview – An insider's guide, Second Edition](https://www.amazon.com/dp/B08CMF2CQF/ref=tsm_1_fb_lk)
- [Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321)
- [Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/)
## Scalable Software Architecture

### Resources

- [https://github.com/Developer-Y/Scalable-Software-Architecture](https://github.com/Developer-Y/Scalable-Software-Architecture)

## Clean Code

### 📝 Articles

- [10 common broken rules of clean code](http://www.kamilgrzybek.com/clean-code/10-common-broken-clean-code-rules/)

### 📹 Videos
- [9 "rules" for cleaner code | Object Calisthenics](https://www.youtube.com/watch?v=gyrSiY4SHxI)
- [Is clean code actually slower?](https://www.youtube.com/watch?v=zVLuQAnNue8)
### Resources

- [https://github.com/thangchung/clean-code-dotnet](https://github.com/thangchung/clean-code-dotnet) - Thang Chung 
	> 🛁 Clean Code concepts and tools adapted for .NET
	
## Anti Patterns

### Resources
- [Anti Patterns](https://deviq.com/antipatterns/antipatterns-overview) - DevIQ

### Anemic Domain Model

#### 📝 Articles

- [AnemicDomainModel](https://www.martinfowler.com/bliki/AnemicDomainModel.html)
- [What is Anemic Domain Model and why it can be harmful?](https://danielrusnok.medium.com/what-is-anemic-domain-model-and-why-it-can-be-harmful-2677b1b0a79a) - Daniel Rusnok

### Code Smells

#### 📝 Articles
- [Code Smells](https://deviq.com/antipatterns/code-smells) - DevIQ

## Asynchronous Patterns

### 📝 Articles
- [Communication in a microservice architecture](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture) - Microsoft
- [Asynchronous message-based communication](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/asynchronous-message-based-communication) - Microsoft
- [Modular Monolith: Integration Styles](http://www.kamilgrzybek.com/tag/messaging/) - Kamil Grzybek

## Modular Monolith

### Resources
- [modular-monoliths](https://files.gotocon.com/uploads/slides/conference_12/515/original/gotoberlin2018-modular-monoliths.pdf)

### 📝 Articles
- [Modular Monolith: A Primer](http://www.kamilgrzybek.com/design/modular-monolith-primer/)
- [My experience of using modular monolith and DDD architectures](https://www.thereformedprogrammer.net/my-experience-of-using-modular-monolith-and-ddd-architectures/)
- [Modular Monolith: Architectural Drivers](http://www.kamilgrzybek.com/design/modular-monolith-architectural-drivers/)
- [Modular Monolith: Architecture Enforcement](http://www.kamilgrzybek.com/design/modular-monolith-architecture-enforcement/)
- [MonolithFirst](https://martinfowler.com/bliki/MonolithFirst.html)
- [My experience of using the Clean Code architecture with a Modular Monolith](https://www.thereformedprogrammer.net/my-experience-of-using-the-clean-code-architecture-with-a-modular-monolith/)
- [My experience of using modular monolith and DDD architectures](https://www.thereformedprogrammer.net/my-experience-of-using-modular-monolith-and-ddd-architectures/)
- [Modular programming: Beyond the spaghetti mess](https://www.tiny.cloud/blog/modular-programming-principle/)
- [Migrating Monoliths to Microservices with Decomposition and Incremental Changes](https://www.infoq.com/articles/migrating-monoliths-to-microservices-with-decomposition/)
- [Decompose your monolith: Ten principles for refactoring a monolith to microservices](https://chrisrichardson.net/post/refactoring/2020/08/21/ten-principles-for-refactoring-to-microservices.html)
- [Decompose Your Monolith: Strategies for Migrating to Microservices](https://chrisrichardson.net/post/refactoring/2019/10/09/refactoring-to-microservices.html)

### 🔖 Samples
- [https://github.com/kgrzybek/modular-monolith-with-ddd](https://github.com/kgrzybek/modular-monolith-with-ddd) - Kamil Grzybek
    > Full Modular Monolith application with Domain-Driven Design approach.

- [https://github.com/kgrzybek/modular-monolith-with-ddd-fe-react](https://github.com/kgrzybek/modular-monolith-with-ddd-fe-react) - Kamil Grzybek
    > FrontEnd React application for Modular Monolith With DDD repository and system
	
- [https://github.com/phongnguyend/Practical.CleanArchitecture](https://github.com/phongnguyend/Practical.CleanArchitecture)
	> Asp.Net Core 5 Clean Architecture (Microservices, Modular Monolith, Monolith) samples (+Blazor, Angular 11, React 17, Vue 2.6), Domain-Driven Design, CQRS, Event Sourcing, SOLID, Asp.Net Core Identity Custom Storage, Identity Server 4 Admin UI, Entity Framework Core, Selenium E2E Testing, SignalR Notification, Hangfire Tasks Scheduling

- [https://github.com/dcomartin/LooselyCoupledMonolith](https://github.com/dcomartin/LooselyCoupledMonolith)

- [https://github.com/trueai-org/module-shop](https://github.com/trueai-org/module-shop)

- [https://github.com/thangchung/coolstore-moduliths](https://github.com/thangchung/coolstore-moduliths)

- [https://github.com/thangchung/blog-core](https://github.com/thangchung/blog-core)
	> Modular blog using Blazor with clean domain-driven design patterns

- [https://github.com/ddd-by-examples/library](https://github.com/ddd-by-examples/library)
	> A comprehensive Domain-Driven Design example with problem space strategic analysis and various tactical patterns.
	
- [https://github.com/simplcommerce/SimplCommerce](https://github.com/simplcommerce/SimplCommerce)
	> A simple, cross platform, modularized ecommerce system built on .NET Core
	
- [https://github.com/spetz/NPost](https://github.com/spetz/NPost)
	> Modular Monolith sample

- [https://github.com/devmentors/Cine](https://github.com/devmentors/Cine)
	> Modular monolith in .NET Core
	
- [https://github.com/devmentors/Trill-modular-monolith](https://github.com/devmentors/Trill-modular-monolith)

### 📹 Videos
- [GOTO 2018 • Modular Monoliths • Simon Brown](https://www.youtube.com/watch?v=5OjqD-ow8GE)
- [Modular monoliths (Simon Brown) - 2016](https://www.youtube.com/watch?v=kbKxmEeuvc4)
- [Modular monoliths by Simon Brown](https://www.youtube.com/watch?v=h_rBDIC51C4)
- [Munich .NET Meetup: Modular Monolith Architecture - One to rule them all](https://www.youtube.com/watch?v=tpeOWlif1l4)
- [Majestic Modular Monoliths by Axel Fontaine](https://www.youtube.com/watch?v=BOvxJaklcr0)
- [Decompose your monolith-  when and how to incrementally refactor to microservices](https://vimeo.com/442842127/543b578f38)

## Packaging

### 📝 Articles
- [Package by component and architecturally-aligned testing](http://www.codingthearchitecture.com/2015/03/08/package_by_component_and_architecturally_aligned_testing.html) - Simon Brown
- [Schools of Package Architecture - An Illustration](http://codemanship.co.uk/parlezuml/blog/?postid=539)

## Azure Application Architecture

### Resources
- [https://dotnet.microsoft.com/learn/azure/architecture](https://dotnet.microsoft.com/learn/azure/architecture)

### 📝 Articles
- [Cars Island Car Rental on the Azure cloud - part 1](https://daniel-krzyczkowski.github.io/Cars-Island-Car-Rental-On-Azure-Cloud/)

### 🔖 Samples
- [https://github.com/Daniel-Krzyczkowski/MicrosoftAzure](https://github.com/Daniel-Krzyczkowski/MicrosoftAzure)
	> Microsoft Azure code samples.
	
### Azure Active Directory (Azure AD)

#### 📝 Articles
- [Automate Azure AD B2C policies release with GitHub Actions](https://daniel-krzyczkowski.github.io/Automate-Azure-AD-B2C-policies-release-with-GitHub-Actions/)
- [Manage guest user access with Azure AD External Identities](https://daniel-krzyczkowski.github.io/Manage-Guest-User-Access-with-Azure-Ad-External-Identities/)
- [Azure AD B2C with external authorization store](https://daniel-krzyczkowski.github.io/Azure-AD-B2C-With-External-Authorization-Store/)

#### 📹 Videos
- [Automate Azure AD B2C custom policies release with GitHub Actions](https://www.youtube.com/watch?v=h25h-fxL_K4)
- [Azure AD B2C with external authorization store](https://www.youtube.com/watch?v=_umcCiSOFv0)
- [How to provide access to application for different types of users with Azure AD and Azure AD B2C](https://www.youtube.com/watch?v=NrkbWPDFGzI)
- [Introduction to the Microsoft Identity Platform](https://www.youtube.com/watch?v=_JhftCwwZqs)
- [How to secure solution with Azure Active Directory B2C (Azure AD B2C)](https://www.youtube.com/watch?v=LDh1bJOihBg)
### Azure Service Bus

#### 📝 Articles
- [Asynchronous messaging with Azure Service Bus](https://daniel-krzyczkowski.github.io/Asynchronous-Messaging-With-Azure-Service-Bus/)

#### Videos
- [Asynchronous messaging with Azure Service Bus](https://www.youtube.com/watch?v=aJn5CDhWvJQ)

### Azure Functions

#### 📝 Articles
- [Build event-driven solutions with Azure Functions and Cosmos DB](https://www.youtube.com/watch?v=8WMjRIw6QzQ)

### Azure Template
- [Be more efficient developer with Azure Developer Starter Pack](https://daniel-krzyczkowski.github.io/Be-More-Efficient-Developer-With-Azure-Developer-Starter-Pack/)
#### 📝 Articles

#### 📹 Videos
- [Be more efficient developer with Azure Developer Starter Pack](https://www.youtube.com/watch?v=8XJQLaWAPro)

#### 🔖 Samples
- [https://github.com/Daniel-Krzyczkowski/AzureDeveloperTemplates](https://github.com/Daniel-Krzyczkowski/AzureDeveloperTemplates)
	> This repository contains helpful code templates for Azure cloud developers.
	
## Modeling

### Relationships

#### 📝 Articles
- [What is the difference between IS -A relationship and HAS-A relationship in Java? [duplicate]](https://stackoverflow.com/questions/36162714/what-is-the-difference-between-is-a-relationship-and-has-a-relationship-in-java)
- [Types Of Relationships In Object Oriented Programming (OOP)](https://www.linkedin.com/pulse/types-relationships-object-oriented-programming-oop-sarah-el-dawody/)
- [Common types of OOP relationships and their UML representation](https://dev.to/tommyc/common-types-of-oop-relationships-and-their-uml-representation-5b27)
- [Association, aggregation, and composition in OOP explained](https://www.infoworld.com/article/3029325/exploring-association-aggregation-and-composition-in-oop.html)
- [Data Modeling 101](http://www.agiledata.org/essays/dataModeling101.html)
- [UML Notation](https://www.vertabelo.com/blog/uml-notation/)
- [UML Association vs Aggregation vs Composition](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/)

### Use Case Diagram 

#### 📝 Articles
- [UML Use Case Diagram: Tutorial with EXAMPLE](https://www.guru99.com/use-case-diagrams-example.html)
- [UML 2 Use Case Diagramming Guidelines](http://agilemodeling.com/style/useCaseDiagram.htm)

### Class Diagram (Class Modeling)

#### 📝 Articles
- [UML Class Diagram Tutorial with Examples](https://www.guru99.com/uml-class-diagram.html)
- [What is Class Diagram?](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-class-diagram/)
- [Data Modeling 101](http://www.agiledata.org/essays/dataModeling101.html)
- [UML 2 Class Diagramming Guidelines](http://agilemodeling.com/style/classDiagram.htm)

###  Component Diagram

#### 📝 Articles
- [UML 2 Component Diagramming Guidelines](http://agilemodeling.com/style/componentDiagram.htm)

### ER Diagrams (Data Modeling)

#### 📝 Articles
- [Data Modeling 101](http://www.agiledata.org/essays/dataModeling101.html)
- [What to Look for in Your ER Diagram Tool](https://vertabelo.com/blog/selecting-er-diagram-tool/)
- [Why Do You Need an ER Diagram?](https://vertabelo.com/blog/why-need-an-er-diagram/)
- [Getting Started with ER Diagrams in Vertabelo](https://vertabelo.com/blog/start-online-data-modeling/)
- [What Is an ER Diagram?](https://vertabelo.com/blog/entity-relationship-diagram/)
- [Explaining an ER Diagram, With Steps and Use Cases](https://vertabelo.com/blog/how-to-use-er-diagram/)
- [A Database Model for a Hotel Reservation Booking App and Channel Manager](https://vertabelo.com/blog/a-database-model-for-a-hotel-reservation-booking-app-and-channel-manager/)
- [A Data Model for Online Concert Ticket Sales](https://vertabelo.com/blog/a-data-model-for-online-concert-ticket-sales/)
- [What Are the Symbols Used in an ER Diagram?](https://vertabelo.com/blog/symbol-in-erd-diagram/)
- [ER Diagram: Entity Relationship Diagram Model | DBMS Example](https://www.guru99.com/er-diagram-tutorial-dbms.html)
- [What is an Entity Relationship Diagram (ERD)?](https://www.lucidchart.com/pages/er-diagrams)
- [Entity Data Model Key Concepts](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/entity-data-model-key-concepts?redirectedfrom=MSDN)
- [A Data Model for an Online Musical Equipment Shop](https://vertabelo.com/blog/a-data-model-for-an-online-musical-equipment-shop/)
- [A Data Model for a Wine Store](https://vertabelo.com/blog/a-data-model-for-a-wine-store/)
- [Automobile Repair Shop Data Model](https://vertabelo.com/blog/automobile-repair-shop-data-model/)
- [A Data Model for a Freelancers Collective](https://vertabelo.com/blog/a-data-model-for-a-freelancers-collective/)
- [What is the difference between 'class diagrams' and 'data models' in UML?](https://stackoverflow.com/questions/8926519/what-is-the-difference-between-class-diagrams-and-data-models-in-uml)
- [A Comparison of Data Modeling Techniques](https://www.essentialstrategies.com/publications/modeling/compare.htm)

#### 📹 Videos
- [Creating Entity Relationship Diagrams using Draw.io](https://www.youtube.com/watch?v=lAtCySGDD48)
- [Entity Relationship Diagram (ERD) Tutorial - Part 1](https://www.youtube.com/watch?v=QpdhBUYk7Kk)
- [Entity Relationship Diagram (ERD) Tutorial - Part 2](https://www.youtube.com/watch?v=-CuY5ADwn24)

### Data Model Notations

#### 📝 Articles
- [A Comparison of Data Modeling Techniques](https://www.essentialstrategies.com/publications/modeling/compare.htm)
- [IDEF1X Data Model Notation](https://www.essentialstrategies.com/publications/modeling/idef1x.htm)
- [Richard Barker Data Model Notation](https://www.essentialstrategies.com/publications/modeling/barker.htm)
- [Information Engineering Data Model Notation](https://www.essentialstrategies.com/publications/modeling/infoeng.htm)
- [Crow’s Foot Notation](https://vertabelo.com/blog/crow-s-foot-notation/)
- [Chen Notation](https://vertabelo.com/blog/chen-erd-notation/)
- [Barker’s Notation](https://vertabelo.com/blog/barkers-erd-notation/)
- [UML Notation](https://vertabelo.com/blog/uml-notation/)

### Conceptual Modeling

#### 📝 Articles
- [Data Modelling: Conceptual, Logical, Physical Data Model Types](https://www.guru99.com/data-modelling-conceptual-logical.html)
- [Data Modeling - Conceptual Data Model](https://sparxsystems.com/resources/gallery/diagrams/software/sw-data_modeling_-conceptual_data_model.html)
- [Conceptual Model](https://www.visual-paradigm.com/support/documents/vpuserguide/3563/3564/85378_conceptual,l.html)
- [How to Implement a Conceptual, Logical, and Physical Data Model in Vertabelo](https://vertabelo.com/blog/conceptual-logical-and-physical-data-model/)
- [What Are Conceptual, Logical, and Physical Data Models?](https://vertabelo.com/blog/conceptual-logical-physical-data-model/)
- [5 Examples of Conceptual Data Models](https://vertabelo.com/blog/conceptual-data-model/)
- [Data Modeling 101](http://www.agiledata.org/essays/dataModeling101.html)

#### 📹 Videos
- [Conceptual Data Modeling with Diagrams.Net](https://www.youtube.com/watch?v=7lGFx-qYmhU)
- [Get a Head Start with Entity Framework Core 5.0 with EF Core Power Tools](https://www.youtube.com/watch?v=uph-AGyOd8c)

### Logical Modeling

#### 📝 Articles
- [How to Implement a Conceptual, Logical, and Physical Data Model in Vertabelo](https://vertabelo.com/blog/conceptual-logical-and-physical-data-model/)
- [What Are Conceptual, Logical, and Physical Data Models?](https://vertabelo.com/blog/conceptual-logical-physical-data-model/)
- [Vertabelo Features: Logical Diagrams](https://vertabelo.com/blog/logical-diagrams/)

#### 📹 Videos 
- [Logical Data Modeling with Diagrams.Net](https://www.youtube.com/watch?v=CmjW3HyazRA)

### Physical Modeling

#### 📝 Articles
- [How to Implement a Conceptual, Logical, and Physical Data Model in Vertabelo](https://vertabelo.com/blog/conceptual-logical-and-physical-data-model/)
- [What Are Conceptual, Logical, and Physical Data Models?](https://vertabelo.com/blog/conceptual-logical-physical-data-model/)
- [How to Create Physical Diagrams in Vertabelo](https://vertabelo.com/blog/create-physical-diagrams-in-vertabelo/)
- [Reverse Engineering With Vertabelo](https://vertabelo.com/blog/reverse-engineering-with-vertabelo/)

### Tools
- [Diagrams.Net](https://www.diagrams.net)
- [Vertabelo](https://vertabelo.com)
- [Reverse engineering - vertabelo](https://vertabelo.com/documentation/physical-model/reverse-engineering-doc/)
- [LucidChart](https://www.lucidchart.com/pages/)
- [Top 7 Entity Relationship (ER) Diagram Online Tools](https://vertabelo.com/blog/er-diagram-tools/)

## Engineering Blogs
- [Uber](https://eng.uber.com)
- [Twitter](https://blog.twitter.com/engineering/en_us.html)
- [Netflix Engineering Blog](https://netflixtechblog.com/?gi=133ebc0bdafe)
- [Netflix Architecture Blog](https://netflixtechblog.com/tagged/architecture)
- [Amazon](https://aws.amazon.com/blogs/aws/)
- [Amazon Architecture blog](https://aws.amazon.com/blogs/architecture/)
- [https://github.com/kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

## Books
- [Microsoft Application Architecture Guide, 2nd Edition](https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ff650706(v=pandp.10))
- [Lean Architecture: for Agile Software Development Paperback – Illustrated, 13 July 2010](https://www.amazon.co.uk/Lean-Architecture-Agile-Software-Development/dp/0470684208)
- [Patterns of Enterprise Application Architecture](https://www.amazon.co.uk/Enterprise-Application-Architecture-Addison-Wesley-Signature/dp/0321127420/)
- [Documenting Software Architectures: Views and Beyond](https://www.amazon.co.uk/dp/0321552687)
- [Designing Software Architectures: A Practical Approach](https://www.amazon.co.uk/Designing-Software-Architectures-Practical-Engineering/dp/0134390784)
- [Clean Architecture: A Craftsman's Guide to Software Structure and Design: A Craftsman's Guide to Software Structure and Design](https://www.amazon.co.uk/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
- [Architecting Modern Web Applications with ASP.NET Core and Microsoft Azure](https://ardalis.com/architecture-ebook/)
- [Agile Principles, Patterns, and Practices in C# ](https://www.amazon.com/Agile-Principles-Patterns-Practices-C/dp/0131857258)
- [.NET Microservices: Architecture for Containerized .NET Applications](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/)
- [Software Architecture for Developers](https://leanpub.com/software-architecture-for-developers) - Simon Brown
- [Building Evolutionary Architectures: Support Constant](https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360)
- [Fundamentals of Software Architecture: An Engineering Approach](https://www.amazon.com/Fundamentals-Software-Architecture-Comprehensive-Characteristics/dp/1492043451/ref=pd_lpo_14_t_0/137-5137322-0498527)
- [Just Enough Software Architecture: A Risk-Driven Approach](https://www.amazon.com/Just-Enough-Software-Architecture-Risk-Driven/dp/0984618104)
- [Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and Iterative Development](https://www.goodreads.com/book/show/85019.Applying_UML_and_Patterns)
- [Object-Oriented Design Heuristics](https://www.amazon.com/Object-Oriented-Design-Heuristics-paperback-Arthur/dp/0321774965)
- [The Pragmatic Programmer: Your Journey To Mastery](https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052/)
- [Code Complete: A Practical Handbook of Software Construction, Second Edition](https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670)
- [Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
- [Building Event-Driven Microservices: Leveraging Organizational Data at Scale](https://www.amazon.com/Building-Event-Driven-Microservices-Leveraging-Organizational/dp/1492057894)
- [System Design Interview – An insider's guide, Second Edition](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF)
- [Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services](https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647/)
- [Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems](https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321)


## Other Resources

- [How to Learn Software Design and Architecture | The Full-stack Software Design & Architecture Map](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/)
- [https://github.com/simskij/awesome-software-architecture](https://github.com/simskij/awesome-software-architecture)
- [https://github.com/Developer-Y/Scalable-Software-Architecture](https://github.com/Developer-Y/Scalable-Software-Architecture)
- [https://github.com/binhnguyennus/awesome-scalability](https://github.com/binhnguyennus/awesome-scalability)
- [https://github.com/mfornos/awesome-microservices](https://github.com/mfornos/awesome-microservices)
- [System Design](https://www.youtube.com/playlist?list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - Tech Dummies Narendra L
- [Modular Monoliths](https://files.gotocon.com/uploads/slides/conference_12/515/original/gotoberlin2018-modular-monoliths.pdf)
