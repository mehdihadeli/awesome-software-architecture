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
  - [Microservices](#microservices)
    - [Observibility](#observibility)
	- [Dapr](#dapr)
    - [Tye](#tye)
	- [Steeltoe](#steeltoe)
  - [Serverless Architectural Pattern](#serverless-architectural-pattern)
  - [MicroKernel Architectural Pattern](microKernel-architectural-pattern)
- [Design Patterns](#design-patterns)
  - [Decorator Pattern](#decorator-pattern)
  - [Specification Pattern](#specification-pattern)
  - [Repository Pattern](#repository-pattern)
  - [Query Object Pattern](#query-object-pattern)
  - [Factory Pattern](#factory-pattern)
  - [Strategy Pattern](#strategy-pattern)
- [Cloud Design Patterns](#cloud-design-patterns)
- [Microservices Anti Pattern](#microservices-anti-pattern)
- [Object Oriented Design](#object-oriented-design)
- [Distributed Systems Design](#distributed-systems-design)
- [Scalable Software Architecture](#scalable-software-architecture)
- [Clean Code](#clean-code)
- [Design Best Practices](#design-best-practices)
- [Anti Patterns](#anti-patterns)
- [Eventual Consistency](#eventual-consistency)
- [Messaging Patterns](#messaging-patterns)
  - [Kafka](#kafka)
  - [RabbitMQ](#rabbitmq)
- [Distributed Transactions](#distributed-transactions)
- [Concurrency](#concurrency)
- [Eventual Consistency](#eventual-consistency)
- [Modular Monolith](#modular-monolith)
- [RESTful API Design](#restful-api-design)
- [Caching](#caching)
- [Packaging](#packaging)
- [Refactoring](#refactoring)
- [Azure Application Architecture](azure-application-architecture)
- [Modeling](#modeling)
- [Event Storming](#event-storming)
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
- [DevTernity 2016: Simon Brown - The Art of Visualising Software Architecture](https://www.youtube.com/watch?v=zcmU-OE452k)
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
- [Software Architecture vs Code](https://www.youtube.com/watch?v=ehH3UGdSwPo)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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
- [Software Architecture vs Code](https://www.youtube.com/watch?v=ehH3UGdSwPo)
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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Traditional N-Layer Architecture

#### 📝 Articles

- [N-tier architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier)
- [The Tyranny of Horizontal Architectures (and How You Might Escape): Part 1](https://www.ojdevelops.com/2018/07/the-tyranny-of-horizontal-architectures.html)
- [Traditional "N-Layer" architecture applications](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#traditional-n-layer-architecture-applications)
- [What is N-Tier Architecture? How It Works, Examples, Tutorials, and More](https://stackify.com/n-tier-architecture/)
- [Layered Architecture](https://herbertograca.com/2017/08/03/layered-architecture/) - Herberto Graca

#### 📹 Videos

- [Layered/n-Tier Architectural pattern](https://www.youtube.com/watch?v=BCXcIllT7Lc)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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
- [Clean Architecture for ASP.NET Core Solution: A Case Study](https://blog.ndepend.com/clean-architecture-for-asp-net-core-solution/) - NDepend
- [How to implement the Clean Architecture?](http://www.plainionist.net/Implementing-Clean-Architecture/)
- [Implementing Clean Architecture - What is a use case?](http://www.plainionist.net/Implementing-Clean-Architecture-UseCases/)
- [Implementing Clean Architecture - Make it scream](http://www.plainionist.net/Implementing-Clean-Architecture-Scream/)

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
- [Gill CLEEREN: Clean architecture with ASP.NET Core | UCP2019](https://www.youtube.com/watch?v=BxtHt7tsX-c&t=2582s) - Gill CLEEREN
- [Adding Aggregate Example to Clean Architecture solution template](https://www.youtube.com/watch?v=kxuGtgOimGA) - Steve Smith

#### 🔖 Samples

- [Sairyss/domain-driven-hexagon](https://github.com/Sairyss/domain-driven-hexagon)
	> Guide on Domain-Driven Design, Hexagonal architecture, best practices etc.
	
- [acobsDataSolutions/OrgManager](https://github.com/JacobsDataSolutions/OrgManager) - Jacobs Data
    > CQRS and Clean Domain-Driven Design concepts on the ASP.NET Core stack. Demo application for a fictional corporate organization management tool.
    
- [jasontaylordev/CleanArchitecture](https://github.com/jasontaylordev/CleanArchitecture) - Jason Taylor
    > Clean Architecture Solution Template for Angular 10 and .NET 5 - [Project Template (nuget package)](https://www.nuget.org/packages/Clean.Architecture.Solution.Template)

- [EduardoPires/EquinoxProject](https://github.com/EduardoPires/EquinoxProject) - Eduardo Pires
    > Full ASP.NET Core 3.1 application with DDD, CQRS and Event Sourcing concepts

- [ardalis/cleanarchitecture](https://github.com/ardalis/cleanarchitecture) - Steve Smith
    > A starting point for Clean Architecture with ASP.NET Core - [Project Template (visual studio extension)](https://marketplace.visualstudio.com/items?itemName=GregTrevellick.CleanArchitecture)

- [pereiren/dotnet-template-onion](https://github.com/pereiren/dotnet-template-onion)
	> Onion Architecture with .NET 5/.NET Core and CQRS/Event Sourcing following a DDD approach
	
- [NNVTV/NetCore-Clean-Architecture](https://github.com/INNVTV/NetCore-Clean-Architecture) - INNVTV
	> .Net Core starter project for clean architecture showcasing use of the CQRS pattern, MediatR and custom Middleware for cross-cutting concerns, micro-service communications with REST/OpenAPI, Swagger, Webhooks and gRPC endpoints, CosmosDB for data and Serilog for logging.
	
- [dotnet-architecture/eShopOnWeb](https://github.com/dotnet-architecture/eShopOnWeb) - Steve Smith
    > Sample ASP.NET Core 5.0 reference application, powered by Microsoft, demonstrating a layered application architecture with monolithic deployment model. Download the eBook PDF from docs folder.

- [matthewrenze/clean-architecture-demo](https://github.com/matthewrenze/clean-architecture-demo) - Matthew Renze
    > A sample app for my presentation on Clean Architecture: Patterns, Practices, and Principles

- [jasontaylordev/NorthwindTraders](https://github.com/jasontaylordev/NorthwindTraders) - Jason Taylor
    > Northwind Traders is a sample application built using ASP.NET Core and Entity Framework Core.

- [hgraca/explicit-architecture-php](https://github.com/hgraca/explicit-architecture-php) - Herberto Graca
	> This repository is a demo of Explicit Architecture, using the Symfony Demo Application.
	
- [mmacneil/CleanAspNetCoreWebApi](https://github.com/mmacneil/CleanAspNetCoreWebApi) - Mark Macneil
    > Starter project for creating APIs built on ASP.NET Core using clean architecture.

- [ivanpaulovich/clean-architecture-manga](https://github.com/ivanpaulovich/clean-architecture-manga) - Ivan Paulovich
    > Clean Architecture with .NET5, C#9 and React+Redux. Use cases as central organizing structure, completely testable, decoupled from frameworks

- [Daniel-Krzyczkowski/CleanArchitectureWithDevSecOps](https://github.com/Daniel-Krzyczkowski/CleanArchitectureWithDevSecOps) - Daniel Krzyczkowski
    > This repository contains code samples related with clean software architecture and DevSecOps.

- [aspnetcorehero/Boilerplate](https://github.com/aspnetcorehero/Boilerplate) - Mukesh Murugan
    > Clean Architecture Solution Template for ASP.NET Core 5.0. Built with Onion/Hexagonal Architecture and incorporates the most essential Packages your projects will ever need. Includes both WebApi and Web(MVC) Projects.

- [fals/cqrs-clean-eventual-consistency](https://github.com/fals/cqrs-clean-eventual-consistency) - Filipe Augusto
	> CQRS, using Clean Architecture, multiple databases and Eventual Consistency

- [rafaelfgx/Architecture](https://github.com/rafaelfgx/Architecture) - Rafael Garcia
	> Architecture .NET 5, ASP.NET Core 5, Entity Framework Core 5, C# 9, Angular 11, Clean Code, SOLID, DDD.

- [kgrzybek/sample-dotnet-core-cqrs-api](https://github.com/kgrzybek/sample-dotnet-core-cqrs-api) - Kamil Grzybek
	> Sample .NET Core REST API CQRS implementation with raw SQL and DDD using Clean Architecture.

- [phongnguyend/Practical.CleanArchitecture](https://github.com/phongnguyend/Practical.CleanArchitecture)
	> Asp.Net Core 5 Clean Architecture (Microservices, Modular Monolith, Monolith) samples (+Blazor, Angular 11, React 17, Vue 2.6), Domain-Driven Design, CQRS, Event Sourcing, SOLID, Asp.Net Core Identity Custom Storage, Identity Server 4 Admin UI, Entity Framework Core, Selenium E2E Testing, SignalR Notification, Hangfire Tasks Scheduling

- [aspnetrun/run-aspnetcore](https://github.com/aspnetrun/run-aspnetcore) - AspNetRun
	> A starter kit for your next ASP.NET Core web application. Boilerplate for ASP.NET Core reference application, demonstrating a layered application architecture with applying Clean Architecture and DDD
	
- [aspnetrun/run-aspnetcore-cqrs](https://github.com/aspnetrun/run-aspnetcore-cqrs) - AspNetRun
	> Real world Enterprise CRM application example of ASP.NET Core + Angular web application. Implemented CQRS Design Pattern for ASP.NET Core + Angular reference application, demonstrating a layered application architecture with DDD

- [aspnetrun/run-aspnetcore-realworld](https://github.com/aspnetrun/run-aspnetcore-realworld) - AspNetRun
	> E-Commerce real world example of run-aspnetcore ASP.NET Core web application. Implemented e-commerce domain with clean architecture for ASP.NET Core reference application, demonstrating a layered application architecture with DDD best practices.

- [jacobduijzer/CleanArchitectureTemplate](https://github.com/jacobduijzer/CleanArchitectureTemplate)
	> A template for a dotnet core api / mvc "clean architecture" project.

- [CanerPatir/aspnet-core-clean-arch](https://github.com/CanerPatir/aspnet-core-clean-arch)
	> It is a clean architecture project template which is based on hexagonal-architecture principles built with .Net core.
	
- [techtribesje/techtribesje](https://github.com/techtribesje/techtribesje)

- [thombergs/buckpal](https://github.com/thombergs/buckpal)
	> An example approach for implementing a Clean/Hexagonal Architecture

- [proudmonkey/ApiBoilerPlate](https://github.com/proudmonkey/ApiBoilerPlate)
	> A simple yet organized project template for building ASP.NET Core APIs in .NET Core 3.1

- [blazorhero/CleanArchitecture](https://github.com/blazorhero/CleanArchitecture)
	> Clean Architecture Template for Blazor WebAssembly Built with MudBlazor Components.

- [Reddnet](https://github.com/moritz-mm/Reddnet)	
	> A mini Reddit written in ASP.NET Core 5.0
	

#### Books
- [Get Your Hands Dirty on Clean Architecture](https://www.packtpub.com/product/get-your-hands-dirty-on-clean-architecture/9781839211966)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>	
	
### Ports And Adapters Architecture (Hexagonal Architecture)

#### 📝 Articles

- [Ports & Adapters Architecture](https://herbertograca.com/2017/09/14/ports-adapters-architecture/) - Herberto Graca
- [DDD, Hexagonal, Onion, Clean, CQRS, … How I put it all together](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/) - Herberto Graca
- [Hexagonal architecture](http://web.archive.org/web/20180422210157/http://alistair.cockburn.us/Hexagonal+Architecture) - Alistair Cockburn
- [Hexagonal (Ports & Adapters) Architecture](https://medium.com/@TKonuklar/hexagonal-ports-adapters-architecture-e3617bcf00a0) - Tugce Konuklar
- [Hexagonal Architecture: the practical guide for a clean architecture](https://beyondxscratch.com/2017/08/19/hexagonal-architecture-the-practical-guide-for-a-clean-architecture/) - Beyond x Scratch
- [Hexagonal Architecture Example: digging a Spring Boot implementation](https://beyondxscratch.com/2020/08/23/hexagonal-architecture-example-digging-a-spring-boot-implementation/) - Beyond x Scratch
- [Hexagonal architecture: don't get lost on your right-side](http://tpierrain.blogspot.com/2020/03/hexagonal-architecture-dont-get-lost-on.html) - Thomas PIERRAIN
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
- [Domain-Driven Design and the Hexagonal Architecture](https://vaadin.com/learn/tutorials/ddd/ddd_and_hexagonal) - Vaadin
- [Hexagonal Architecture by example - a hands-on introduction](https://blog.allegro.tech/2020/05/hexagonal-architecture-by-example.html)
#### 📹 Videos

- [Chris Fidao - Hexagonal Architecture](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=6SBjKOwVq0o)
- [Hexagonal, Onion, and Explicit Architecture with Elixir - Part 1](http://w7.mul.ir/yo%7cut%7cub%7ce.%7cco%7cm/watch?v=iGTCZt9Z8A8)

#### 🔖 Samples
- [Sairyss/domain-driven-hexagon](https://github.com/Sairyss/domain-driven-hexagon)
	> Guide on Domain-Driven Design, Hexagonal architecture, best practices etc.
	
- [ivanpaulovich/hexagonal-architecture-acerola](https://github.com/ivanpaulovich/hexagonal-architecture-acerola) - Ivan Paulovich
	> An Hexagonal Architecture service template with DDD, CQRS, TDD and SOLID using .NET Core 2.0. All small features are testable and could be mocked. Adapters could be mocked or exchanged.

- [ivanpaulovich/clean-architecture-manga](https://github.com/ivanpaulovich/clean-architecture-manga) - Ivan Paulovich
	> Clean Architecture with .NET5, C#9 and React+Redux. Use cases as central organizing structure, completely testable, decoupled from frameworks

- [CanerPatir/aspnet-core-clean-arch](https://github.com/CanerPatir/aspnet-core-clean-arch)
	> It is a clean architecture project template which is based on hexagonal-architecture principles built with .Net core.
	
- [Lunch-box/SimpleOrderRouting](https://github.com/Lunch-box/SimpleOrderRouting)
	> Prototype of a Smart Order Routing system (finance). The opportunity for a mob of Lunch-boxers, to explore various technical approaches in reactive programming.

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
	
### Vertical Slice Architecture

#### 📝 Articles
- [How Vertical Slice Architecture fulfills Clean Architecture’s broken promises](https://headspring.com/2020/08/18/how-vertical-slice-architecture-fulfills-clean-architectures-broken-promises/) - Jimmy Bogard
- [Why vertical slice architecture is better—if you know these few things](https://headspring.com/2019/11/05/why-vertical-slice-architecture-is-better/) - Jimmy Bogard
- [Vertical Slice Architecture](https://jimmybogard.com/vertical-slice-architecture/) - Jimmy Bogard
- [Package by component and architecturally-aligned testing](http://www.codingthearchitecture.com/2015/03/08/package_by_component_and_architecturally_aligned_testing.html) - Simon Brown
- [An architecturally-evident coding style](http://www.codingthearchitecture.com/2014/06/01/an_architecturally_evident_coding_style.html) - Simon Brown
- [Package by Component with Clean Modules in Java](https://blog.ttulka.com/package-by-component-with-clean-modules-in-java) - Tomas Tulka
- [Schools of Package Architecture - An Illustration](http://codemanship.co.uk/parlezuml/blog/?postid=539)
- [Architecting for maintainability through Vertical Slices ](https://www.ghyston.com/insights/architecting-for-maintainability-through-vertical-slices/)
- [Package by component and architecturally-aligned testing](http://www.codingthearchitecture.com/2015/03/08/package_by_component_and_architecturally_aligned_testing.html)
- [The Tyranny of Horizontal Architectures (and How You Might Escape): Part 2](https://www.ojdevelops.com/2018/07/the-tyranny-of-horizontal-architectures2.html)
- [Organizing Code by Feature using Vertical Slices](https://codeopinion.com/organizing-code-by-feature-using-vertical-slices/) - CodeOpinion
- [Vertical slices in ASP.NET MVC](https://www.kenneth-truyers.net/2016/02/02/vertical-slices-in-asp-net-mvc/)
- [Coding: Packaging by vertical slice](https://markhneedham.com/blog/2012/02/20/coding-packaging-by-vertical-slice/)
- [FEATURE FOLDERS IN ASP.NET MVC](https://timgthomas.com/2013/10/feature-folders-in-asp-net-mvc/)
- [Evolutionary Project Structure](https://lostechies.com/jimmybogard/2012/08/30/evolutionary-project-structure/) - Jimmy Bogard
- [Vertical Slice Example Updated to .NET 5](https://lostechies.com/external/?guid=urn:uuid:cac73d2f-ce70-1e57-8eff-5fd747af25f6) - Jimmy Bogard
- [Feature Folders](http://www.kamilgrzybek.com/design/feature-folders/) - Kamil Grzybek
- [Put your controllers on a diet: GETs and queries](https://lostechies.com/jimmybogard/2013/10/29/put-your-controllers-on-a-diet-gets-and-queries/) - Jimmy Bogard
- [Put your controllers on a diet: POSTs and commands](https://lostechies.com/jimmybogard/2013/12/19/put-your-controllers-on-a-diet-posts-and-commands/) - Jimmy Bogard
- [The life-changing (and time-saving!) magic of Feature Focused code organisation.](https://builtwithdot.net/blog/changing-how-your-code-is-organized-could-speed-development-from-weeks-to-days)
- [Migrating Contoso University Example to Razor Pages](https://jimmybogard.com/migrating-contoso-university-example-to-razor-pages/) - Jimmy Bogard
- [API Feature Folders](https://ardalis.com/api-feature-folders/) - Steve Smith
- [Feature Slices for ASP.NET Core MVC](https://docs.microsoft.com/en-us/archive/msdn-magazine/2016/september/asp-net-core-feature-slices-for-asp-net-core-mvc) - Steve Smith
- [Simpler ASP.NET MVC Apps with Razor Pages](https://docs.microsoft.com/en-us/archive/msdn-magazine/2017/september/asp-net-core-simpler-asp-net-mvc-apps-with-razor-pages) - Steve Smith
- [Moving from Controllers and Actions to Endpoints with MediatR](https://ardalis.com/moving-from-controllers-and-actions-to-endpoints-with-mediatr/) - Steve Smith
- [MVC Controllers are Dinosaurs - Embrace API Endpoints](https://ardalis.com/mvc-controllers-are-dinosaurs-embrace-api-endpoints/) - Steve Smith
- [Out with the Onion, in with Vertical Slices](https://medium.com/@jacobcunningham/out-with-the-onion-in-with-vertical-slices-c3edfdafe118)
- [No Abstractions in Vertical Slice Architecture?](https://www.reddit.com/r/dotnet/comments/m1t6g3/no_abstractions_in_vertical_slice_architecture/)
- [Encountering "Vertical Slice Architecture"... Is it incompatible with Clean Architecture?](https://jeremiahflaga.github.io/2019/05/20/vertical-slice-architecture-is-it-incompatible-with-clean-architecture/)
- [Vertical Slices](https://deviq.com/practices/vertical-slices) - DevIQ
- [What Are Your Thoughts On The Vertical Slice Architecture?](https://www.reddit.com/r/dotnet/comments/gej15i/what_are_your_thoughts_on_the_vertical_slice/)

#### 📹 Videos
- [SOLID Architecture in Slices not Layers - Jimmy Bogard](https://vimeo.com/131633177)
- [Vertical Slice Architecture - Jimmy Bogard](https://www.youtube.com/watch?v=5kOzZz2vj2o) - Jimmy Bogard
- [SOLID Architecture in Slices not Layers](https://www.youtube.com/watch?v=wTd-VcJCs_M) - Jimmy Bogard
- [DevTernity 2019: Jimmy Bogard – Vertical Slice Architecture](https://www.youtube.com/watch?v=T6nglsEDaqA) - Jimmy Bogard
- [Vertical Slice Architecture - Jimmy Bogard](https://www.youtube.com/watch?v=SUiWfhAhgQw&lc=UgzDmpq_2SHwmuSgIL54AaABAg)

#### Samples
- [jbogard/ContosoUniversityDotNetCore](https://github.com/jbogard/ContosoUniversityDotNetCore) - Jimmy Bogard
- [jbogard/ContosoUniversityDotNetCore-Pages](https://github.com/jbogard/ContosoUniversityDotNetCore-Pages) - Jimmy Bogard
- [dcomartin/MusicStore](https://github.com/dcomartin/MusicStore) - CodeOpinion
- [ardalis/OrganizingAspNetCore](https://github.com/ardalis/OrganizingAspNetCore) - Steve Smith
- [dotnet-architecture/eShopOnWeb](https://github.com/dotnet-architecture/eShopOnWeb) - Steve Smith
- [ardalis/ApiEndpoints/tree/master/sample](https://github.com/ardalis/ApiEndpoints/tree/master/sample) - Steve Smith
- [PacktPublishing/ASP.NET-Core-5-Design-Patterns/tree/main/C15/Vertical%20Slice%20Architecture](https://github.com/PacktPublishing/ASP.NET-Core-5-Design-Patterns/tree/main/C15/Vertical%20Slice%20Architecture)

#### Books
- [An Atypical ASP.NET Core 5 Design Patterns Guide](https://www.packtpub.com/product/an-atypical-asp-net-core-5-design-patterns-guide/9781789346091)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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
- [Implementing event-based communication between microservices (integration events)](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/integration-event-based-microservice-communications) - Microsoft
- [Domain events: design and implementation](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation) - Microsoft
- [DDD and Messaging Architectures](https://verraes.net/2019/05/ddd-msg-arch/)
- [Developing a Successful End-to-End Complex Event Processing Strategy](https://blog.equinix.com/blog/2018/03/28/developing-a-successful-end-to-end-complex-event-processing-strategy/)
- [Event-Driven Architecture with Apache Kafka for .NET Developers Part 1 - Event Producer](https://thecloudblog.net/post/event-driven-architecture-with-apache-kafka-for-net-developers-part-1-event-producer/)
- [Event-Driven Architecture with Apache Kafka for .NET Developers Part 2 - Event Consumer](https://thecloudblog.net/post/event-driven-architecture-with-apache-kafka-for-.net-developers-part-2-event-consumer/)
- [What do you mean by “Event-Driven”?](https://martinfowler.com/articles/201701-event-driven.html)

#### Videos
- [Event-Driven Architecture | EDA | Software Architectural Patterns](https://www.youtube.com/watch?v=gIL8rW_eyww&t=0s) - The TechCave
- [Events on the outside, on the inside and at the core](https://www.youtube.com/watch?v=rP-InttAbVY)
- [GOTO 2017 • The Many Meanings of Event-Driven Architecture • Martin Fowler](https://www.youtube.com/watch?v=STKCRSUsyP0)
- [Event Driven Collaboration](https://skillsmatter.com/skillscasts/13645-event-driven-colloboration) - Lan Cooper

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Service Oriented Architecture

#### 📝 Articles
- [Service Oriented Architecture (SOA)](https://herbertograca.com/2017/11/09/service-oriented-architecture-soa/)

#### 📹 Videos
- [Service-Oriented Architecture - SOA | Software/Web Application Architecture](https://www.youtube.com/watch?v=jNiEMmoTDoE&t=0s) - The TechCave

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Architectural Design Principles

### Resources
- [Architectural Styles vs. Architectural Patterns vs. Design Patterns](https://herbertograca.com/2017/07/28/architectural-styles-vs-architectural-patterns-vs-design-patterns/)
- [Architectural principles](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) - Microsoft
- [Principles](https://deviq.com/principles/principles-overview) - DevIQ
- [10 Crucial Software Development Principles to Live By](https://www.laneways.agency/software-development-principles/)
- [10 OOP Design Principles Every Programmer Should Know](https://hackernoon.com/10-oop-design-principles-every-programmer-should-know-f187436caf65)
- [Design Principles](https://java-design-patterns.com/principles/) - java-design-patterns.com
- [Principles](http://principles-wiki.net/principles:start) - principles-wiki.net

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Dependency Inversion

#### 📹 Videos
- [The refactoring test (1) - Dependency Inversion & Unit tests | Cracking the .NET interview](https://www.youtube.com/watch?v=U3QvTaw224o)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Open/Closed Principles

#### 📹 Videos
- [The refactoring test (2) - Open-Closed, Single Responsibility | Cracking the .NET interview](https://www.youtube.com/watch?v=Yd4GnWeEkIY)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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
- [Applying cross-cutting concerns in ASP.NET Core with MediatR using behaviors](https://lurumad.github.io/cross-cutting-concerns-in-asp-net-core-with-meaditr)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### KISS

#### 📝 Articles
- [KISS](https://java-design-patterns.com/principles/#kiss)  - java-design-patterns
- [Principles of Good Programming](https://www.artima.com/weblogs/viewpost.jsp?thread=331531)
- [Keep It Simple Stupid (KISS)](http://principles-wiki.net/principles:keep_it_simple_stupid) - principles-wiki
- [Keep It Simple](https://deviq.com/principles/keep-it-simple) - DevIQ

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### YAGNI

#### 📝 Articles
- [YAGNI](https://deviq.com/principles/yagni) - DevIQ
- [YAGNI](https://java-design-patterns.com/principles/#yagni) - java-design-patterns

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Minimize Coupling

#### 📝 Articles
- [Why is loose coupling between services so important?](https://www.ben-morris.com/why-is-loose-coupling-between-services-so-important/) - Ben Morris

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Persistence Ignorance

#### 📝 Articles
- [Persistence Ignorance](https://deviq.com/principles/persistence-ignorance) - DevIQ
- [Understanding Persistence Ignorance Principle](http://techxposer.com/2018/12/29/understanding-persistence-ignorance-principle/)
- [Infrastructure Ignorance](https://ayende.com/blog/3137/infrastructure-ignorance) - Ayende
- [Persistence Ignorance](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice#the-domain-model-layer) - Microsoft

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### GRASP

#### 📝 Articles
- [GRASP – General Responsibility Assignment Software Patterns Explained](https://www.kamilgrzybek.com/design/grasp-explained/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Design Patterns

### Resources 

- [DesignPatterns](https://github.com/abishekaditya/DesignPatterns)
	> Project : Design Patterns Examples in C#
	
- [anupavanm/csharp-design-patterns-for-humans](https://github.com/anupavanm/csharp-design-patterns-for-humans)
	> Design Patterns for Humans™ - An ultra-simplified explanation - C# Examples
	
- [nemanjarogic/DesignPatternsLibrary](https://github.com/nemanjarogic/DesignPatternsLibrary)
	> A comprehensive design patterns library implemented in C#, which covers various design patterns from the most commonly used ones to the lesser-known ones. Get familiar with and learn design patterns through moderately realistic examples.
	
- [beginor/DesignPatterns](https://github.com/beginor/DesignPatterns)

- [EdisonChou/DesignPattern.Samples.CSharp](https://github.com/EdisonChou/DesignPattern.Samples.CSharp)

- [TengXiaoDai/DesignPattern](https://github.com/TengXiaoDai/DesignPattern)

- [rafaelfgx/DesignPatterns](https://github.com/rafaelfgx/DesignPatterns)

- [exceptionnotfound/DesignPatterns](https://github.com/exceptionnotfound/DesignPatterns)

- [anupavanm/csharp-design-patterns-for-humans-examples](https://github.com/anupavanm/csharp-design-patterns-for-humans-examples)

- [wesdoyle/design-patterns-explained-with-food](https://github.com/wesdoyle/design-patterns-explained-with-food)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Service Locator

#### 📝 Articles
- [Service Locator is an Anti-Pattern](https://blog.ploeh.dk/2010/02/03/ServiceLocatorisanAnti-Pattern/)
- [The Service Locator Anti-Pattern](https://freecontent.manning.com/the-service-locator-anti-pattern/)

#### Samples
- [SlimMessageBus](https://github.com/zarusz/SlimMessageBus/blob/d335afcf232e9a2207ae1c5a49dccd2aa50dbaee/src/SlimMessageBus.Host.ServiceLocator/ServiceLocatorMessageBusDependencyResolver.cs)


<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Specification Pattern

#### 📝 Articles
- [Specification pattern: C# implementation](https://enterprisecraftsmanship.com/posts/specification-pattern-c-implementation/) - Vladimir Khorikove
- [Implementing Query Specification pattern in Entity Framework Core](https://gunnarpeipman.com/ef-core-query-specification/) - Gunnar Peipman
- [Using the Specification pattern with Repository and Unit of work](https://dotnetfalcon.com/using-the-specification-pattern-with-repository-and-unit-of-work/) - Akos Nagy
- [Specification](https://ardalis.github.io/Specification/)

#### Videos
- [Reviewing the Specification Pattern and NuGet package](https://www.youtube.com/watch?v=BgWWbBUWyig)
- [What's new in v5 of Ardalis.Specification](https://www.youtube.com/watch?v=gT72mWdD4Qo)

#### Samples
- [https://github.com/ardalis/Specification](https://github.com/ardalis/Specification)
- [https://github.com/dotnet-architecture/eShopOnWeb](https://github.com/dotnet-architecture/eShopOnWeb)


<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
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


<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
### Query Object Pattern

#### 📝 Articles
- [Query Objects instead of Repositories](https://codeopinion.com/query-objects-instead-of-repositories/)
- [Query Objects with a Mediator](https://codeopinion.com/query-objects-with-a-mediator/)


<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
### Decorator Pattern

#### 📝 Articles
- [Decorator Pattern in .NET Core 3.1](https://www.programmingwithwolfgang.com/decorator-pattern-in-net-core-3-1/)
- [Beyond Basics - ASP.Net Core Using the Decorator Pattern](https://adamstorr.azurewebsites.net/blog/beyond-basics-aspnetcore-using-the-decorator-pattern)
- [Decorator pattern with C# and DotNet Core](https://ranjeet.dev/decorator-pattern-with-csharp/)
### Factory Pattern

#### 📝 Articles
 
- [The Factory Pattern In .NET Core](https://dotnetcoretutorials.com/2019/10/15/the-factory-pattern-in-net-core/) - DotnetCoreTutorials

#### Videos
- [SOLID Principles for C# Developers](https://www.pluralsight.com/courses/csharp-solid-principles)


<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
### Strategy Pattern

#### 📝 Articles
- [ASP.NET Core and the Strategy Pattern](https://adamstorr.azurewebsites.net/blog/aspnetcore-and-the-strategy-pattern)

- [6 Ways To Implement The Strategy Pattern In C# (Basic To Advanced)](https://www.blog.jamesmichaelhickey.com/strategy-pattern-implementations)

- [Strategy Pattern C#](https://codewithshadman.com/strategy-pattern-csharp)

- [C# Design Patterns – Strategy Design Pattern](https://code-maze.com/strategy/)

- [The Strategy Pattern in C#](https://www.exceptionnotfound.net/strategy-pattern-in-csharp/)

- [Implement Custom Logic for Clients using the Strategy and Factory Design Patterns](https://www.codebyamir.com/blog/implement-custom-logic-for-clients-using-strategy-and-factory-design-patterns)

- [Design Pattern Combination – Strategy with Factory Method](
https://blog.e-zest.com/design-pattern-combination-strategy-with-factory-method/)

#### Videos
- [SOLID Principles for C# Developers](https://www.pluralsight.com/courses/csharp-solid-principles)

#### Samples

- [WestDiscGolf/StrategyPatternExample](https://github.com/WestDiscGolf/StrategyPatternExample)
- [Dashell/strategy-pattern-dotnetcore](
https://github.com/Dashell/strategy-pattern-dotnetcore)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Cloud Design Patterns

### Resources
 - [Cloud Design Patterns](https://docs.microsoft.com/en-us/azure/architecture/patterns/index-patterns) - Microsoft
 - [Cloud Computing Patterns](https://www.cloudcomputingpatterns.org) - CloudComputingPatterns
 
### Samples
- [https://github.com/mspnp/cloud-design-patterns](https://github.com/mspnp/cloud-design-patterns) 
	> Prescriptive Architecture Guidance for Cloud Applications

### Books 
- [Cloud Design Patterns: Prescriptive Architecture Guidance for Cloud Applications (Microsoft patterns & practices)](https://www.amazon.com/Cloud-Design-Patterns-Prescriptive-Architecture-ebook/dp/B00ITGHBBS)
- [Cloud Architecture Patterns: Using Microsoft Azure](https://www.amazon.com/Cloud-Architecture-Patterns-Using-Microsoft/dp/1449319777)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
###  Anti-Corruption Layer Pattern

#### 📝 Articles
- [Anti-Corruption Layer pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)
- [Gateway](https://martinfowler.com/eaaCatalog/gateway.html)
- [The Anti-Corruption Layer Pattern](https://dev.to/asarnaout/the-anti-corruption-layer-pattern-pcd)
- [Anti-Corruption Layer: How to Keep Legacy Support from Breaking New Systems](https://www.cloudbees.com/blog/anti-corruption-layer-how-keep-legacy-support-breaking-new-systems)

#### 📹 Videos
- [The Anti-corruption layer, Gateway Aggregation / Routing patterns | Cloud with Chris](https://www.youtube.com/watch?v=gGDu4FdUk7I)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Gateway Pattern

#### Articles
- [MICROSERVICES ARCHITECTURE GATEWAY PATTERN - DOS AND DON'TS](https://akfpartners.com/growth-blog/microservices-architecture-gateway-pattern-dos-and-donts)
- [Gateway Aggregation pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation)
- [Gateway Offloading pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-offloading)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Ambassador pattern

#### Articles
- [Ambassador pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
###  Asynchronous Request-Reply pattern

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

###  Cache-Aside

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

###  Bulkhead Pattern

#### Articles

- [MICROSERVICE BULKHEAD PATTERN - DOS AND DON'TS](https://akfpartners.com/growth-blog/bulkhead-pattern)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

###  Command and Query Responsibility Segregation (CQRS)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
###  Circuit Breaker

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

###  Gateway Aggregation

#### Articles
- [MICROSERVICE AGGREGATOR PATTERN](https://akfpartners.com/growth-blog/microservice-aggregator-pattern)
- [Gateway Aggregation pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation)

###  Gateway Offloading

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
###  Gateway Routing

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

###  Priority Queue
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

###  Publisher/Subscriber

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

###  Retry

###  Saga
- [A MICROSERVICES SAGA CHOREOGRAPHY EXAMPLE](https://akfpartners.com/growth-blog/a-microservices-saga-choreography-example)
- [MICROSERVICES SAGA PATTERN](https://akfpartners.com/growth-blog/microservices-saga-pattern)
###  Sharding
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
###  Sidecar
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
###  Throttling
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
###  Valet Key
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
### At-least-Once Delivery (Outbox Pattern)

#### 📝 Articles
- [At-least-once Delivery](https://www.cloudcomputingpatterns.org/at_least_once_delivery/) - cloudcomputingpatterns.org
- [The Outbox Pattern](http://www.kamilgrzybek.com/design/the-outbox-pattern/) - Kamil Grzybek
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
### Exactly-Once Delivery

#### 📝 Articles

- [Exactly-once Delivery](https://www.cloudcomputingpatterns.org/exactly_once_delivery/) - cloudcomputingpatterns.org

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Architectural Patterns

### Resources

### 📹 Videos
- [Software Architecture | Architectural patterns | Architecture vs Design pattern](https://www.youtube.com/watch?v=lTkL1oIMiaU&t=769s)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Domain Driven Design - Domain Centric 

#### Resources
- [Domain-Driven Design Starter Modelling Process](https://github.com/ddd-crew/ddd-starter-modelling-process) - ddd-crew

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
- [Domain Driven Design re-distilled](https://yoan-thirion.medium.com/domain-driven-design-re-distilled-685e75595a60)
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
- [Domains and Subdomains](https://thedomaindrivendesign.io/domains-and-subdomains/)


#### 📹 Videos
- [Java EE: Design Patterns and Architecture](https://www.linkedin.com/learning/java-ee-design-patterns-and-architecture/advantages-and-disadvantages-4)
- [AVOID Entity Services by Focusing on Capabilities](https://www.youtube.com/watch?v=2gOOstEI4vU)

#### 🔖 Samples

- [eShopOnContainers](https://github.com/dotnet-architecture/eShopOnContainers)
    > Cross-platform .NET sample microservices and container based application that runs on Linux Windows and macOS. Powered by .NET 5, Docker Containers and Azure Kubernetes Services. Supports Visual Studio, VS for Mac and CLI based environments with Docker CLI, dotnet CLI, VS Code or any other code editor.

- [kimcu-on-thenet/ddd-net-ef-core](https://github.com/kimcu-on-thenet/ddd-net-ef-core)
    > Self study: DDD, .net core, entity framework core

- [blog-core](https://github.com/thangchung/blog-core) - Thang Chung
    > Modular blog using Blazor with clean domain-driven design patterns

- [practical-clean-ddd](https://github.com/thangchung/practical-clean-ddd) Thang Chung
    > The repository uses the eCommerce business domain to demonstrate how to apply Domain Driven Design, Clean Architecture, and Microservice Architecture patterns.

- [ddd-guestbook](https://github.com/ardalis/ddd-guestbook) - Steve Smith
    > A DDD guestbook example written for ASP.NET Core
	
- [run-aspnetcore](https://github.com/aspnetrun/run-aspnetcore) - AspNetRun
	> A starter kit for your next ASP.NET Core web application. Boilerplate for ASP.NET Core reference application, demonstrating a layered application architecture with applying Clean Architecture and DDD

- [run-aspnetcore-realworld](https://github.com/aspnetrun/run-aspnetcore-realworld) - AspNetRun
	> E-Commerce real world example of run-aspnetcore ASP.NET Core web application. Implemented e-commerce domain with clean architecture for ASP.NET Core reference application, demonstrating a layered application architecture with DDD best practices.

- [DDD-starter-dotnet](https://github.com/itlibrium/DDD-starter-dotnet)
	> Sample implementation and comparison of various approaches to building DDD applications. Useful as a baseline to quickly start a DDD dot net project.

- [hOrgManager](https://github.com/JacobsDataSolutions/OrgManager)
    > CQRS and Clean Domain-Driven Design concepts on the ASP.NET Core stack. Demo application for a fictional corporate organization management tool.

- [ChristDDD](https://github.com/anjoy8/ChristDDD)

- [library](https://github.com/ddd-by-examples/library)
	> A comprehensive Domain-Driven Design example with problem space strategic analysis and various tactical patterns.

- [Aggregates.NET](https://github.com/charlessolar/Aggregates.NET)
	> .NET event sourced domain driven design model via NServiceBus and GetEventStore

- [eShopOnContainersDDD](https://github.com/charlessolar/eShopOnContainersDDD)
	> Fork of dotnet-architecture/eShopOnContainers in full DDD/CQRS design using my own patterns
	
- [ddd-and-eventsourcing-example](https://github.com/eraydin/ddd-and-eventsourcing-example)	

- [educational-platform](https://github.com/anton-liauchuk/educational-platform)
	> Modular Monolith Java application with DDD

- [coolstore-moduliths](https://github.com/thangchung/coolstore-moduliths)
	> The coolstore website on modular monolith approach

- [modular-monolith-with-ddd](https://github.com/kgrzybek/modular-monolith-with-ddd)
	> Full Modular Monolith application with Domain-Driven Design approach.

- [Trill-modular-monolith](https://github.com/devmentors/Trill-modular-monolith)

- [Confab-training](https://github.com/spetz/Confab-training)

- [coolstore-microservices](https://github.com/vietnam-devs/coolstore-microservices)
	> A full-stack .NET microservices build on Dapr and Tye

#### Library
- [https://contextmapper.org](https://contextmapper.org)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Exceptions
- [Prefer Custom Exceptions to Framework Exceptions](https://ardalis.com/prefer-custom-exceptions-to-framework-exceptions/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Value Objects

##### 📝 Articles
- [Implement value objects](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/implement-value-objects)
- [The hidden value of the Value Object](https://dev.to/rafalpienkowski/the-hidden-value-of-the-value-object-1hga)
- [DDD Value Objects With Entity Framework Core](https://www.edgesidesolutions.com/ddd-value-objects-with-entity-framework-core/)
- [Value Object: a better implementation](https://enterprisecraftsmanship.com/posts/value-object-better-implementation/)
- [C# 9 Records as DDD Value Objects](https://enterprisecraftsmanship.com/posts/csharp-records-value-objects/)
- [Entities, Value Objects, Aggregates and Roots](https://lostechies.com/jimmybogard/2008/05/21/entities-value-objects-aggregates-and-roots/)

##### Videos
- [Treating Primitive Obsession with ValueObjects | DDD in .NET](https://www.youtube.com/watch?v=h4uldNA1JUE)
- [The Power of Value - Power Use of Value Objects in Domain Driven Design - Dan Bergh Johnsson](https://www.youtube.com/watch?v=vh-LT1mkIz4)
##### Library
- [Value](https://github.com/tpierrain/Value)
	> a pico library (or code snippets shed) to help you to easily implement Value Types in your C# projects without making errors nor polluting your domain logic with boiler-plate code.
	
- [ValueOf](https://github.com/mcintyre321/ValueOf)
	> Deal with Primitive Obsession - define ValueObjects in a single line (of C#).

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
	
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
- [Strengthening your domain: a primer](https://lostechies.com/jimmybogard/2010/02/04/strengthening-your-domain-a-primer/)
- [Persistence model and domain anemia](https://lostechies.com/blogs/jimmy_bogard/archive/2009/12/03/persistence-model-and-domain-anemia.aspx)
- [The Anemic Domain Model Pattern](http://codebetter.com/gregyoung/2009/07/15/the-anemic-domain-model-pattern/)
- [Strengthening your domain: Aggregate Construction](https://lostechies.com/jimmybogard/2010/02/24/strengthening-your-domain-aggregate-construction/)
- [How to create fully encapsulated Domain Models](https://udidahan.com/2008/02/29/how-to-create-fully-encapsulated-domain-models/)
- [Strategic DDD — Distilling the problem domain](https://afedyanin.wordpress.com/2016/05/17/distilling-the-problem-domain/)
- [Strategic DDD — Focusing on the Core Domain](https://afedyanin.wordpress.com/2016/05/18/focusing-on-the-core-domain/)

##### 📹 Videos
- [AVOID Entity Services by Focusing on Capabilities](https://www.youtube.com/watch?v=2gOOstEI4vU) - CodeOpinion

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
#### Bounded Context

##### 📝 Articles
- [Context is King: Finding Service Boundaries](https://codeopinion.com/context-is-king-finding-service-boundaries/)
- [Defining Service Boundaries by Splitting Entities](https://codeopinion.com/defining-service-boundaries-by-splitting-entities/)
- [BoundedContext](https://martinfowler.com/bliki/BoundedContext.html)
- [Strategic DDD — Bounded Contexts](https://afedyanin.wordpress.com/2016/05/18/bounded-contexts/)
- [Bounded Context](https://thedomaindrivendesign.io/bounded-context/)

##### 📹 Videos
- [Context is King | Finding Service Boundaries Talk](https://www.youtube.com/watch?v=dnhshUdRW70)
- [Defining Service Boundaries by Splitting Entities](https://www.youtube.com/watch?v=lGvYHmvXiyk)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Domain Service

##### 📝 Articles

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Application Service

##### 📝 Articles
- [Domain services vs Application services](https://enterprisecraftsmanship.com/2016/09/08/domain-services-vs-application-services/) - Vladimir Khorikove
- [Implement the microservice application layer using the Web API](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-application-layer-implementation-web-api) - Microsoft
- [Simple CQRS implementation with raw SQL and DDD](http://www.kamilgrzybek.com/design/simple-cqrs-implementation-with-raw-sql-and-ddd/) - Kamil Grzybek 

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
#### Domain Events

##### 📝 Articles
- [How to publish and handle Domain Events](http://www.kamilgrzybek.com/design/how-to-publish-and-handle-domain-events/) - Kamil Grzybek
- [Handling Domain Events: Missing Part](http://www.kamilgrzybek.com/design/handling-domain-events-missing-part/) - Kamil Grzybek
- [The Outbox Pattern](http://www.kamilgrzybek.com/design/the-outbox-pattern/) - Kamil Grzybek
- [Domain Events – Salvation](https://udidahan.com/2009/06/14/domain-events-salvation/)
- [Domain events: design and implementation](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation) - Microsoft
- [Events on the outside, on the inside and at the core](https://chrisrichardson.net/post/microservices/2021/02/21/events-are-the-core.html)
- [Strengthening your domain: Domain Events](https://lostechies.com/jimmybogard/2010/04/08/strengthening-your-domain-domain-events/) - Jimmy Bogard
- [Don't publish Domain Events, return them!](https://blog.jayway.com/2013/06/20/dont-publish-domain-events-return-them/)
- [A better domain events pattern](https://lostechies.com/jimmybogard/2014/05/13/a-better-domain-events-pattern/) - Jimmy Bogard
- [Implementing event-based communication between microservices (integration events)](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/integration-event-based-microservice-communications) - Microsoft
- [DDD and Messaging Architectures](https://verraes.net/2019/05/ddd-msg-arch/) - Mathias Verraes
- [Domain events: simple and reliable solution](https://enterprisecraftsmanship.com/posts/domain-events-simple-reliable-solution/) - Vladimir Khorikove
- [Domain Events Pattern Example](https://tonytruong.net/domain-events-pattern-example

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Validation

##### 📝 Articles
- [Design validations in the domain model layer](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-model-layer-validations) - Microsoft
- [REST API Data Validation](http://www.kamilgrzybek.com/design/rest-api-data-validation/) - Kamil Grzybek
- [Domain Model Validation](http://www.kamilgrzybek.com/design/domain-model-validation/) - Kamil Grzybek
- [Validation in a DDD world](https://lostechies.com/jimmybogard/2009/02/15/validation-in-a-ddd-world/) - Jimmy Bogard
- [Validation in Domain-Driven Design (DDD)](http://gorodinski.com/blog/2012/05/19/validation-in-domain-driven-design-ddd/)
- [Validation and DDD](https://enterprisecraftsmanship.com/posts/validation-and-ddd/) - Vladimir Khorikove
- [C# code contracts vs input validation](https://enterprisecraftsmanship.com/posts/code-contracts-vs-input-validation/) - Vladimir Khorikove
- [The fallacy of the always-valid entity](https://jeffreypalermo.com/2009/05/the-fallacy-of-the-always-valid-entity/) - Jeffrey Palermo

##### Library
- [GuardClauses](https://github.com/ardalis/GuardClauses)
	> A simple package with guard clause extensions.
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>


#### Infrastructure

##### 📝 Articles
- [Design the infrastructure persistence layer](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design) - Microsoft
- [Implement the infrastructure persistence layer with Entity Framework Core](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-implementation-entity-framework-core) - Microsoft
- [Use NoSQL databases as a persistence infrastructure](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/nosql-database-persistence-infrastructure) - Microsoft
- [Scaffold Your Clean DDD Web Application - Part 3: Persistence, Tenancy, and the Data Model](https://blog.jacobsdata.com/2020/09/25/scaffold-your-clean-ddd-web-application-part-3-persistence-tenancy-and-the-data-model) - John Jacobs

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Aggregation

##### 📝 Articles
- [Processing multiple aggregates – transactional vs eventual consistency](https://www.kamilgrzybek.com/design/processing-multiple-aggregates-transactional-vs-eventual-consistency/) - Kamil Grzybek
- [Handling concurrency – Aggregate Pattern and EF Core](http://www.kamilgrzybek.com/design/handling-concurrency-aggregate-pattern-and-ef-core/) - Kamil Grzybek
- [Aggregate (Root) Design: Behavior & Data](https://codeopinion.com/aggregate-root-design-behavior-data/?utm_source=feedly&utm_medium=rss&utm_campaign=aggregate-root-design-behavior-data) - CodeOpinion
- [Strengthening your domain: Aggregate Construction](https://lostechies.com/jimmybogard/2010/02/24/strengthening-your-domain-aggregate-construction/)
- [Idempotent Aggregates](https://codeopinion.com/idempotent-aggregates/)
##### 📹 Videos
- [Aggregate (Root) Design: Separate Behavior & Data for Persistence](https://www.youtube.com/watch?v=GtWVGJp061A) - CodeOpinion
- [Adding Aggregate Example to Clean Architecture solution template](https://www.youtube.com/watch?v=kxuGtgOimGA) - Steve Smith
- [Aggregate Design: Using Invariants as a Guide](https://www.youtube.com/watch?v=64ngP-aUYPc) - CodeOpinion
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Mapping

##### 📝 Articles
- [Scaffold Your Clean DDD Web Application - Part 5: Domain-Driven Design Entity Mapping Strategies](https://blog.jacobsdata.com/2021/03/22/scaffold-your-clean-ddd-web-application-part-5-domain-driven-design-entity-mapping-strategies) - John Jacobs

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Enums

##### 📝 Articles

- [Series: Enumeration Classes – DDD and beyond](https://ankitvijay.net/2020/06/12/series-enumeration-classes-ddd-and-beyond/)
- [Enumeration classes](https://lostechies.com/jimmybogard/2008/08/12/enumeration-classes/)
- [Use enumeration classes instead of enum types](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/enumeration-classes-over-enum-types)
- [Introduction to Enumeration Classes](https://ankitvijay.net/2020/05/21/introduction-enumeration-class/)
- [Enumeration class and JSON Serialization](https://ankitvijay.net/2020/06/01/enumeration-class-serialization/)
- [Reference data as code](https://enterprisecraftsmanship.com/posts/reference-data-as-code/)
- [Enum Alternatives in C#](https://ardalis.com/enum-alternatives-in-c/)
- [Listing Strongly Typed Enum Options in C#](https://ardalis.com/listing-strongly-typed-enum-options-in-c/)

##### Library
- [SmartEnum](https://github.com/ardalis/SmartEnum)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Anemic Domain Model

##### 📝 Articles

- [AnemicDomainModel](https://www.martinfowler.com/bliki/AnemicDomainModel.html)
- [What is Anemic Domain Model and why it can be harmful?](https://danielrusnok.medium.com/what-is-anemic-domain-model-and-why-it-can-be-harmful-2677b1b0a79a) - Daniel Rusnok
- [Anemic Model x Rich Model](https://thedomaindrivendesign.io/anemic-model-x-rich-model/)
- [Anemic Model](https://thedomaindrivendesign.io/anemic-model/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Domain Primitives

##### 📝 Articles
- [My Take On Domain Primitives](https://svenhuebner-it.com/my-take-on-domain-primitives/) - Sven Hübner
- [Domain Primitives I: easily declaring domain primitives](https://svenhuebner-it.com/domain-primitives-i-easily-declaring-domain-primitives/) - Sven Hübner 
- [Domain Primitives: what they are and how you can use them to make more secure software](https://freecontent.manning.com/domain-primitives-what-they-are-and-how-you-can-use-them-to-make-more-secure-software/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
		
#### Tactical Design Patterns

##### 📝 Articles
- [Tactical Domain-Driven Design](https://vaadin.com/learn/tutorials/ddd/tactical_domain_driven_design) - Vaadin
- [DDD — Tactical Design Patterns](https://afedyanin.wordpress.com/2016/04/27/ddd-tactical-design-patterns/)
- [What is Tactical Design ?](https://thedomaindrivendesign.io/what-is-tactical-design/)	

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Strategic Design Patterns

##### 📝 Articles
- [Strategic Domain-Driven Design](https://vaadin.com/learn/tutorials/ddd/strategic_domain_driven_design) - Vaadin
- [What is Strategic Design ?](https://thedomaindrivendesign.io/what-is-strategic-design/)
- [Strategic DDD — Distilling the problem domain](https://afedyanin.wordpress.com/2016/05/17/distilling-the-problem-domain/)
- [Strategic DDD — Focusing on the Core Domain](https://afedyanin.wordpress.com/2016/05/18/focusing-on-the-core-domain/)
- [Strategic DDD — Bounded Contexts](https://afedyanin.wordpress.com/2016/05/18/bounded-contexts/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### CQRS

#### 📝 Articles
- [Command and Query Responsibility Segregation (CQRS) pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs) - Microsoft
- [Simple CQRS implementation with raw SQL and DDD](http://www.kamilgrzybek.com/design/simple-cqrs-implementation-with-raw-sql-and-ddd/) - Kamil Grzybek
- [CQRS/MediatR implementation patterns](https://lostechies.com/jimmybogard/2016/10/27/cqrsmediatr-implementation-patterns/) - Jimmy Bogard
- [CQRS Myths: 3 Most Common Misconceptions](https://codeopinion.com/cqrs-myths-3-most-common-misconceptions/) - CodeOpinion
- [Dealing with Duplication in MediatR Handlers](https://lostechies.com/jimmybogard/2016/12/12/dealing-with-duplication-in-mediatr-handlers/)
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
- [Processing multiple aggregates – transactional vs eventual consistency](http://www.kamilgrzybek.com/design/processing-multiple-aggregates-transactional-vs-eventual-consistency/)
- [What is CQRS?](http://cqrs.nu/Faq/command-query-responsibility-segregation)
- [Task-Based UI](https://cqrs.wordpress.com/documents/task-based-ui/)
- [Put your controllers on a diet: GETs and queries](https://lostechies.com/jimmybogard/2013/10/29/put-your-controllers-on-a-diet-gets-and-queries/)
- [Exposing IQueryable in a CQRS Query Stack](https://buildplease.com/pages/lets-iqueryable/)
- [Reactive in practice, Unit 3: Translate the domain model to service APIs](https://developer.ibm.com/tutorials/reactive-in-practice-3/)
- [Reactive in practice, Unit 6: CQRS, Part 1 – Write side](https://developer.ibm.com/tutorials/reactive-in-practice-6/)
- [Reactive in practice, Unit 7: CQRS, Part 2 – ReadSideProcessor for queries and views](https://developer.ibm.com/tutorials/reactive-in-practice-7/)
- [Reactive in practice, Unit 8: CQRS, Part 3 – ReadSideProcessor for transactions](https://developer.ibm.com/tutorials/reactive-in-practice-8/)
- [CQRS with MediatR and AutoMapper](https://lostechies.com/jimmybogard/2015/05/05/cqrs-with-mediatr-and-automapper/)
- [Meanwhile... on the command side of my architecture](https://blogs.cuttingedge.it/steven/posts/2011/meanwhile-on-the-command-side-of-my-architecture/)
- [Meanwhile... on the query side of my architecture](https://blogs.cuttingedge.it/steven/posts/2011/meanwhile-on-the-query-side-of-my-architecture/)
- [MVC Controllers are Dinosaurs - Embrace API Endpoints](https://ardalis.com/mvc-controllers-are-dinosaurs-embrace-api-endpoints/) - Steve Smith
- [Moving from Controllers and Actions to Endpoints with MediatR](https://ardalis.com/moving-from-controllers-and-actions-to-endpoints-with-mediatr/) - Steve Smith
- [CQRS snippets](https://cezarypiatek.github.io/post/cqrs-snippets/)
- [CQRS Simple Architecture](https://kariera.future-processing.pl/blog/cqrs-simple-architecture/)
- [Brighter Commands](https://www.goparamore.io/command)
- [CQRS with Entity Framework Core](https://www.edgesidesolutions.com/cqrs-with-entity-framework-core/)
- [A .Net5 Sample Using CQRS(Command Query Responsibility Segregation) And MediatR Patterns](https://www.learmoreseekmore.com/2021/03/dotnet5-sample-cqrs-mediatr-pattern.html)
- [CQRS with MediatR and AutoMapper](https://lostechies.com/jimmybogard/2015/05/05/cqrs-with-mediatr-and-automapper/)
- [Thin Controllers with CQRS and MediatR](https://codeopinion.com/thin-controllers-cqrs-mediatr/)


#### 📹 Videos
- [Java EE: Design Patterns and Architecture](https://www.linkedin.com/learning/java-ee-design-patterns-and-architecture/advantages-and-disadvantages-4)
- [Decomposing CRUD to a Task Based UI](https://www.youtube.com/watch?v=DjZepWrAKzM)
- [CQRS Myths | 3 Most Common Misconceptions](https://www.youtube.com/watch?v=O9qpcZt6jW0&t=77s)
- [Is a REST API with CQRS Possible?](https://www.youtube.com/watch?v=6XO6vSiioWE)
- [Organizing (Commands, Events & Handlers) in Microservices/SOA](https://www.youtube.com/watch?v=8j5ETvSSNpc)
- [CQRS Myths | 3 Most Common Misconceptions](https://www.youtube.com/watch?v=O9qpcZt6jW0)

#### Library
- [https://github.com/gautema/CQRSlite](https://github.com/gautema/CQRSlite)
	> A lightweight framework to help creating CQRS and Eventsourcing applications in C#

#### 🔖 Samples

- [sample-dotnet-core-cqrs-api](https://github.com/kgrzybek/sample-dotnet-core-cqrs-api) - Kamil Grzybek
	> Sample .NET Core REST API CQRS implementation with raw SQL and DDD using Clean Architecture.
	
- [run-aspnetcore-cqrs](https://github.com/aspnetrun/run-aspnetcore-cqrs) - AspNetRun
	> Real world Enterprise CRM application example of ASP.NET Core + Angular web application. Implemented CQRS Design Pattern for ASP.NET Core + Angular reference application, demonstrating a layered application architecture with DDD

- [CQRS](https://github.com/tpierrain/CQRS)
	> A simple project to explain CQRS during a live coding session at MS experiences'16
	
- [ChristDDD](https://github.com/anjoy8/ChristDDD)
	> 🙌 ASP.NET Core 3.1 应用, 包含 DDD、CQRS、EDA 和ES事件回溯

- [Reddnet](https://github.com/moritz-mm/Reddnet)
	> A mini Reddit written in ASP.NET Core 5.0

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
	
### Event Sourcing

#### 📝 Articles 
- [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) - Martin Fowler
- [About event sourcing](https://eventuate.io/whyeventsourcing.html) - eventuate.io
- [Event Sourcing pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing) - Microsoft
- [Event Sourcing Example & Explained in plain English](https://codeopinion.com/event-sourcing-example-explained-in-plain-english/?utm_source=feedly&utm_medium=rss&utm_campaign=event-sourcing-example-explained-in-plain-english) - CodeOpinion
- [Event Sourcing with Azure SQL and Entity Framework Core](https://daniel-krzyczkowski.github.io/Event-Sourcing-With-Azure-SQL-And-Entity-Framework-Core/)
- [Projections in Event Sourcing: Build ANY model you want!](https://codeopinion.com/projections-in-event-sourcing-build-any-model-you-want)
- [Reactive in practice, Unit 5: Event sourcing](https://developer.ibm.com/tutorials/reactive-in-practice-5/)
- [Reactive in practice, Unit 7: CQRS, Part 2 – ReadSideProcessor for queries and views](https://developer.ibm.com/tutorials/reactive-in-practice-7/)
- [EVENT SOURCING MICROSERVICES PATTERN](https://akfpartners.com/growth-blog/event-sourcing-microservices-pattern)

#### Videos
- [Event Sourcing Example & Explained in plain English](https://www.youtube.com/watch?v=AUj4M-st3ic)
- [Projections in Event Sourcing: Build ANY model you want!](https://www.youtube.com/watch?v=bTRjO6JK4Ws)
- [Event Sourcing: Rehydrating Aggregates with Snapshots](https://www.youtube.com/watch?v=eAIkomEid1Y)
- [Event Sourcing with Azure SQL and Entity Framework Core](https://www.youtube.com/watch?v=-BhDW3GeSqg)

### Library
- [EventFlow](https://github.com/eventflow/EventFlow)
	> Async/await first CQRS+ES and DDD framework for .NET

- [AggregateSource](https://github.com/yreynhout/AggregateSource)
	> Lightweight infrastructure for doing eventsourcing using aggregates
	
- [Projac](https://github.com/BitTacklr/Projac)
	> A set of .NET projection libraries
	
#### Samples
- [Hands-On-Domain-Driven-Design-with-.NET-Core](https://github.com/PacktPublishing/Hands-On-Domain-Driven-Design-with-.NET-Core) - Alexey Zimarev

- [Aggregates.NET](https://github.com/charlessolar/Aggregates.NET)
	> .NET event sourced domain driven design model via NServiceBus and GetEventStore

- [eShopOnContainersDDD](https://github.com/charlessolar/eShopOnContainersDDD)
	> Fork of dotnet-architecture/eShopOnContainers in full DDD/CQRS design using my own patterns

- [ProductContext-EventSourcing](https://github.com/osoykan/ProductContext-EventSourcing)
	> A practical/experimental Event Sourcing application on Product Bounded Context in an e-commerce

- [ddd-and-eventsourcing-example](https://github.com/eraydin/ddd-and-eventsourcing-example)	

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Microservices  

#### Resources
- [.NET Microservices Architecture Guidance](https://dotnet.microsoft.com/learn/aspnet/microservices-architecture) - Microsoft
- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore) - Mohammad Ebrahimi 
- [.NET Microservices: Architecture for Containerized .NET Applications](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/) - Microsoft
- [Cloud-Native learning resources for .NET developers](https://devblogs.microsoft.com/dotnet/cloud-native-learning-resources-for-net-developers/)

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
- [Communication in a microservice architecture](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture)
- [Asynchronous message-based communication](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/asynchronous-message-based-communication)
- [A Microservices implementation journey — Part 1](https://koukia.ca/a-microservices-implementation-journey-part-1-9f6471fe917)
- [Microservices and Docker with .Net Core and Azure Service Fabric - Part One](https://elvanydev.com/Microservices-part1/) - ElvanyDev
- [Microservices and Docker with .Net Core and Azure Service Fabric - Part two](http://elvanydev.com/Microservices-part2/) - ElvanyDev
- [Microservices and Docker with .Net Core and Azure Service Fabric - Part three](http://elvanydev.com/Microservices-part3/) - ElvanyDev
- [Microservices and Docker with .Net Core and Azure Service Fabric - Part four](http://elvanydev.com/Microservices-part4/) - ElvanyDev
- [What are Microservices? Advantages and Disadvantages of Microservices Architecture](https://www.dotnettricks.com/learn/microservices/architecture-example-advantages)
- [Microservices Architecture on .NET with applying CQRS, Clean Architecture and Event-Driven Communication](https://medium.com/aspnetrun/microservices-architecture-on-net-3b4865eea03f)
- [Best Practices for Building a Microservice Architecture](https://www.vinaysahni.com/best-practices-for-building-a-microservice-architecture)

#### 📹 Videos
- [Microservices Architectural Pattern](https://www.youtube.com/watch?v=8BPDv038oMI&t=0s) - The TechCave
- [Microservices Architecture and Implementation on .NET 5](https://www.udemy.com/course/microservices-architecture-and-implementation-on-dotnet/?couponCode=FA24745CC57592AB612A)
- [Designing Loosely Coupled Microservices](https://skillsmatter.com/skillscasts/14926-designing-loosely-coupled-microservices)
- [Architectural Patterns for High-Performance Microservices in Kubernetes](https://www.youtube.com/watch?v=vpU04uGz19U&ab_channel=Hazelcast)
- [GOTO 2020 • When To Use Microservices (And When Not To!) • Sam Newman & Martin Fowler](https://www.youtube.com/watch?v=GBTdnfD6s5Q&t=825s)
#### 📦 Library
- [tye](https://github.com/dotnet/tye)
    > Tye is a tool that makes developing, testing, and deploying microservices and distributed applications easier. Project Tye includes a local orchestrator to make developing microservices easier and the ability to deploy microservices to Kubernetes with minimal configuration.
	
- [Rebus](https://github.com/rebus-org/Rebus)
	> 🚌 Simple and lean service bus implementation for .NET

- [confluent-kafka-dotnet](https://github.com/confluentinc/confluent-kafka-dotnet/)
	> Confluent's Apache Kafka .NET client

- [CAP](https://github.com/dotnetcore/CAP)
	> Distributed transaction solution in micro-service base on eventually consistency, also an eventbus with Outbox pattern

- [MassTransit](https://github.com/MassTransit/MassTransit)
	> Distributed Application Framework for .NET

- [Brighter](https://github.com/BrighterCommand/Brighter)
	> Command Dispatcher, Processor, and Distributed Task Queue
	
- [reverse-proxy](https://github.com/microsoft/reverse-proxy)
	> YARP: A toolkit for developing high-performance HTTP reverse proxy applications.

- [abp](https://github.com/abpframework/abp)	
	> Open Source Web Application Framework for ASP.NET Core

- [Kledex](https://github.com/lucabriguglia/Kledex)
	> .NET Standard framework to create simple and clean design. Advanced features for DDD, CQRS and Event Sourcing.
	
- [microdot](https://github.com/gigya/microdot)
	> Microdot: An open source .NET microservices framework
	
- [Steeltoe](https://github.com/SteeltoeOSS/Steeltoe)	
	> Steeltoe .NET Core Components: CircuitBreaker, Configuration, Connectors, Discovery, Logging, Management, and Security
	
- [Foundatio](https://github.com/FoundatioFx/Foundatio)
	> Pluggable foundation blocks for building distributed apps.
	
- [Enbiso.NLib](https://github.com/enbiso/Enbiso.NLib)
	> .Net Standard Libraries for Microservices

- [knightbus](https://github.com/BookBeat/knightbus)
	> Fast multi-transport messaging framework

- [Platibus](https://github.com/sweetlandj/Platibus)	
	> Decentralized asynchronous messaging framework
	
- [MicroBus is a simple in process Mediator for .NET](https://github.com/daniellittledev/Enexure.MicroBus)
	> MicroBus is a simple in process Mediator for .NET
	
- [Mediator.Net](https://github.com/mayuanyang/Mediator.Net)
	> A simple mediator for .Net for sending command, publishing event and request response with pipelines supported

- [Brighter](https://github.com/BrighterCommand/Brighter.git)
	> Command Dispatcher, Processor, and Distributed Task Queue

- [Darker](https://github.com/BrighterCommand/Darker)
	> The query-side counterpart of Brighter

- [surging](https://github.com/fanliang11/surging)
	> Surging is a micro-service engine that provides a lightweight, high-performance, modular RPC request pipeline. The service engine supports http, TCP, WS,Grpc, Thrift,Mqtt, UDP, and DNS protocols. It uses ZooKeeper and Consul as a registry, and integrates it. Hash, random, polling, Fair Polling as a load balancing algorithm,

- [FamilyBucket](https://github.com/q315523275/FamilyBucket)
	> 集合.net core、ocelot、consul、netty、rpc、eventbus、configserver、tracing、sqlsugar、vue-admin、基础管理平台等构建的微服务一条龙应用

#### Books
- [Microservices Architecture and Step by Step Implementation on .NET](https://aspnetrun.azurewebsites.net/Microservices)

#### 🔖 Samples

- [eShopOnContainers](https://github.com/dotnet-architecture/eShopOnContainers)
    > Cross-platform .NET sample microservices and container based application that runs on Linux Windows and macOS. Powered by .NET 5, Docker Containers and Azure Kubernetes Services. Supports Visual Studio, VS for Mac and CLI based environments with Docker CLI, dotnet CLI, VS Code or any other code editor.

- [coolstore-microservices](https://github.com/vietnam-devs/coolstore-microservices) - Thang Chung
    > A full-stack .NET microservices build on Dapr and Tye

- [practical-dapr](https://github.com/thangchung/practical-dapr) - Thang Chung
    > A full-stack .NET microservices build on Dapr and Tye

- [eShopOnContainersDDD](https://github.com/charlessolar/eShopOnContainersDDD)
	> Fork of dotnet-architecture/eShopOnContainers in full DDD/CQRS design using my own patterns
	
- [dapr-tye-simple-microservices](https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices)
    > An example of building .NET Core microservices with Dapr and Tye

- [run-aspnetcore-microservices](https://github.com/aspnetrun/run-aspnetcore-microservices) - AspNetRun
	> Microservices on .Net platforms which used Asp.Net Web API, Docker, RabbitMQ, Ocelot API Gateway, MongoDB, Redis, SqlServer, Entity Framework Core, CQRS and Clean Architecture implementation. See Microservices Architecture and Step by Step Implementation on .NET Course w/ discount
	
- [run-aspnet-identityserver4](https://github.com/aspnetrun/run-aspnet-identityserver4) - AspNetRun
	> Secure microservices with using standalone Identity Server 4 and backing with Ocelot API Gateway. Protect our ASP.NET Web MVC and API applications with using OAuth 2 and OpenID Connect in IdentityServer4. Securing your web application and API with tokens, working with claims, authentication and authorization middlewares and applying policies.
	
- [ModernArchitectureShop](https://github.com/alugili/ModernArchitectureShop) - Bassam Alugili
	> The Microservices Online Shop is an application with a modern software architecture that is cleanly designed and based on.NET lightweight technologies. The shop has two build variations. The first variant is the classic Microservices Architectural Style. The second one is with Dapr. Dapr has a comprehensive infrastructure  
	
- [run-aspnet-grpc](https://github.com/aspnetrun/run-aspnet-grpc) - AspNetRun
	> Using gRPC in Microservices for Building a high-performance Interservice Communication with .Net 5. See gRPC Microservices and Step by Step Implementation on .NET Course w/ discount->

- [coolstore-microservice](https://github.com/jbossdemocentral/coolstore-microservice)

- [practical-clean-ddd](https://github.com/thangchung/practical-clean-ddd)
	> A simplified and effortless approach to get started with Domain-driven Design, Clean Architecture, CQRS, and Microservices patterns
	
- [shopping-cart-k8s](https://github.com/thangchung/shopping-cart-k8s)
	> Service Mesh patterns for Microservices

- [Aggregates.NET](https://github.com/charlessolar/Aggregates.NET)
	> .NET event sourced domain driven design model via NServiceBus and GetEventStore

- [ViennaNET](https://github.com/Raiffeisen-DGTL/ViennaNET)
	> Framework for quickly creating enterprise microservices on .NET Core

- [MicroCouriers](https://github.com/ImranMA/MicroCouriers)
	> Microservices ASP.NET Core + Event Bus + Kubernetes + Design Patterns
	
- [book-fast-service-fabric](https://github.com/dzimchuk/book-fast-service-fabric)
	> A sample demonstrating how to implement a multitenant facility management and accommodation booking application as native Azure Service Fabric reliable services.

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Observibility

#### Articles
- [Monitoring and Observability in Cloud-Native ASP.NET Core apps](https://devblogs.microsoft.com/aspnet/monitoring-and-observability-in-cloud-native-asp-net-core-apps/)

#### 📹 Videos
- [On .NET Live - Cloud Native Patterns for .NET Developers](https://www.youtube.com/watch?v=PDdHa0ushJ0)
	
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
	
### Dapr

#### 📝 Articles

#### 📹 Videos
- [On .NET Live - Microservice applications with DAPR and .NET](https://www.youtube.com/watch?v=kIfmwmJHNMs)

#### Samples
- [https://github.com/vietnam-devs/coolstore-microservices](https://github.com/vietnam-devs/coolstore-microservices) - Thang Chung
    > A full-stack .NET microservices build on Dapr and Tye

- [https://github.com/thangchung/practical-dapr](https://github.com/thangchung/practical-dapr) - Thang Chung
    > A full-stack .NET microservices build on Dapr and Tye

- [https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices](https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices)
    > An example of building .NET Core microservices with Dapr and Tye

- [https://github.com/alugili/ModernArchitectureShop](https://github.com/alugili/ModernArchitectureShop) - Bassam Alugili
	> The Microservices Online Shop is an application with a modern software architecture that is cleanly designed and based on.NET lightweight technologies. The shop has two build variations. The first variant is the classic Microservices Architectural Style. The second one is with Dapr. Dapr has a comprehensive infrastructure 

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
 
### Service Discovey

#### Consul

##### 📝 Articles

##### 📹 Videos
 
#### Samples
 - [surging](https://github.com/fanliang11/surging)
	> Surging is a micro-service engine that provides a lightweight, high-performance, modular RPC request pipeline. The service engine supports http, TCP, WS,Grpc, Thrift,Mqtt, UDP, and DNS protocols. It uses ZooKeeper and Consul as a registry, and integrates it. Hash, random, polling, Fair Polling as a load balancing algorithm,

- [FamilyBucket](https://github.com/q315523275/FamilyBucket)
	> 集合.net core、ocelot、consul、netty、rpc、eventbus、configserver、tracing、sqlsugar、vue-admin、基础管理平台等构建的微服务一条龙应用

- [GrpcConsul](https://github.com/pchalamet/GrpcConsul)
	> Sample for GRPC + Consul + dynamic endpoint for .net

- [Kit.ServiceDiscovery](https://github.com/Chatham/Kit.ServiceDiscovery)
	> Service discovery kit for .NET microservices
	
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Tye 

#### 📝 Articles

#### 📹 Videos
- [Building microservices with Tye](https://www.youtube.com/watch?v=m4VsOdIT1O4)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Steeltoe

#### Resources
- [Steeltoe](https://github.com/SteeltoeOSS/Steeltoe)
- [Steeltoe.io](https://steeltoe.io)

#### 📹 Videos
- [.NET Microservices with Steeltoe](https://channel9.msdn.com/Shows/On-NET/NET-Microservices-with-Steeltoe)
- [Steeltoe: Develop .NET Microservices Without Cloud Platform Lock-In](https://www.youtube.com/watch?v=Lg1VieZk-5c)

#### Samples
- [Samples](https://github.com/SteeltoeOSS/Samples)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Serverless Architectural Pattern

### 📹 Videos
- [Serverless Computing](https://www.youtube.com/watch?v=RzsaM6kL1FU&t=0s) - The TechCave

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## MicroKernel Architectural Pattern

### 📹 Videos
- [Microkernel Architectural Pattern | Software Architecture](https://www.youtube.com/watch?v=h3icQDMRLd8&t=0s) - The TechCave

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Scalable Software Architecture

### Resources

- [https://github.com/Developer-Y/Scalable-Software-Architecture](https://github.com/Developer-Y/Scalable-Software-Architecture)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
## Clean Code

### 📝 Articles

- [10 common broken rules of clean code](http://www.kamilgrzybek.com/clean-code/10-common-broken-clean-code-rules/)

### 📹 Videos
- [9 "rules" for cleaner code | Object Calisthenics](https://www.youtube.com/watch?v=gyrSiY4SHxI)
- [Is clean code actually slower?](https://www.youtube.com/watch?v=zVLuQAnNue8)
### Resources

- [https://github.com/thangchung/clean-code-dotnet](https://github.com/thangchung/clean-code-dotnet) - Thang Chung 
	> 🛁 Clean Code concepts and tools adapted for .NET
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Design Best Practices

### Articles
- [Static methods considered evil?](https://enterprisecraftsmanship.com/posts/static-methods-evil/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Thin Controllers

#### 📝 Articles
- [Put your controllers on a diet: GETs and queries](https://lostechies.com/jimmybogard/2013/10/29/put-your-controllers-on-a-diet-gets-and-queries/)
- [Put your controllers on a diet: POSTs and commands](https://lostechies.com/jimmybogard/2013/12/19/put-your-controllers-on-a-diet-posts-and-commands/) - Jimmy Bogard
- [CQRS with MediatR and AutoMapper](https://lostechies.com/jimmybogard/2015/05/05/cqrs-with-mediatr-and-automapper/)
- [Thin Controllers with CQRS and MediatR](https://codeopinion.com/thin-controllers-cqrs-mediatr/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
### Strongly Typed Ids

#### 📝 Articles
- [Using C# 9 records as strongly-typed ids](https://thomaslevesque.com/series/using-c%23-9-records-as-strongly-typed-ids/)
- [Series: Using strongly-typed entity IDs to avoid primitive obsession](https://andrewlock.net/series/using-strongly-typed-entity-ids-to-avoid-primitive-obsession/)

### 12 Factor

#### 📝 Articles
- [The Twelve-Factor App](https://12factor.net/)

#### Videos
 - [ASP.NET Community Standup - The 12 Factor App](https://www.youtube.com/watch?v=xRlDuXJ3t08&t=894s&ab_channel=dotNET)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Anti Patterns

### Resources
- [Anti Patterns](https://deviq.com/antipatterns/antipatterns-overview) - DevIQ

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
### Code Smells

#### 📝 Articles
- [Code Smells](https://deviq.com/antipatterns/code-smells) - DevIQ

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Messaging Patterns

### Resources
- [Messaging](https://www.youtube.com/playlist?list=PLThyvG1mlMzm2FyVpKDiU2c7VtrB2Zezg)
- [DDD and Messaging Architectures](https://verraes.net/2019/05/ddd-msg-arch/)
### 📝 Articles
- [Messaging patterns](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging) - Microsoft
- [Communication in a microservice architecture](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture) - Microsoft
- [Asynchronous message-based communication](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/asynchronous-message-based-communication) - Microsoft
- [Modular Monolith: Integration Styles](http://www.kamilgrzybek.com/tag/messaging/) - Kamil Grzybek
- [Marrying RESTful HTTP with Asynchronous and Event-Driven Services](https://sookocheff.com/post/api/marrying-restful-http-with-asynchronous-design/)
- [DDD and Messaging Architectures](https://verraes.net/2019/05/ddd-msg-arch/) - Mathias Verraes
- [Asynchronous Messaging Patterns](https://blogs.mulesoft.com/api-integration/patterns/asynchronous-messaging-patterns/)
- [Messaging Patterns Overview](https://www.enterpriseintegrationpatterns.com/patterns/messaging/)
- [Service Activator](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessagingAdapter.html)
- [Message Properties](https://codeopinion.com/message-properties/)
- [Message Naming Guidelines](https://codeopinion.com/message-naming-guidelines/)
- [Organizing (Commands, Events & Handlers) in Microservices](https://codeopinion.com/organizing-commands-events-handlers-in-microservices/)
- [REST APIs for Microservices? Beware!](https://codeopinion.com/rest-apis-for-microservices-beware/)
- [Messaging Commands & Events Explained!](https://codeopinion.com/messaging-commands-events-explained/)
- [Event Choreography & Orchestration (Sagas)](https://codeopinion.com/event-choreography-orchestration-sagas/)
- [Outbox Pattern: Reliably Save State & Publish Events](https://codeopinion.com/outbox-pattern-reliably-save-state-publish-events/)
- [Handling Duplicate Messages (Idempotent Consumers)](https://codeopinion.com/handling-duplicate-messages-idempotent-consumers/)
- [Message-IDs for Handling Concurrency](https://codeopinion.com/message-ids-for-handling-concurrency/)
- [CAP: Event Bus & Outbox Pattern](https://codeopinion.com/cap-event-bus-outbox-pattern/)
- [Message Queue Overload from High Processing Latency](https://codeopinion.com/message-queue-overload-from-high-processing-latency/)
- [Processing commands with Hangfire and MediatR](http://www.kamilgrzybek.com/design/processing-commands-with-hangfire-and-mediatr/) - Kamil Grzybek
- [Using Hangfire and MediatR as a Message Dispatcher](https://codeopinion.com/using-hangfire-and-mediatr-as-a-message-dispatcher/)
- [Idempotent Aggregates](https://codeopinion.com/idempotent-aggregates/)
- [Identify Commands & Events](https://codeopinion.com/identify-commands-events/)
- [Idempotent Commands](https://codeopinion.com/idempotent-commands/)
- [Moving work Out-of-Process using Brighter and RabbitMQ](https://codeopinion.com/moving-work-out-of-process-using-brighter-and-rabbitmq/)
- [Thin vs Fat Integration Events](https://codeopinion.com/thin-vs-fat-integration-events/)
- [Events: Fat or Thin](https://codesimple.blog/2019/02/16/events-fat-or-thin/)
- [Events on the Outside vs Events on the Inside](https://codesimple.blog/2021/03/14/events-on-the-outside-vs-events-on-the-inside/)
- [Patterns for Decoupling in Distributed Systems: Fat Event](https://verraes.net/2019/05/patterns-for-decoupling-distsys-fat-event/)
- [Message Sender: Who Sent the Command/Event?](https://codeopinion.com/message-sender-who-sent-the-command-event/)
- [Why use DTOs (Data Transfer Objects)?](https://codeopinion.com/why-use-dtos-data-transfer-objects/)
- [Event Versioning Guidelines](https://codeopinion.com/event-versioning-guidelines/)
- [Fat vs thin domain events](https://adrian-philipp.com/notes/fat-vs-thin-domain-events)
- [Putting your events on a diet](https://particular.net/blog/putting-your-events-on-a-diet)
- [What do you mean by “Event-Driven”?](https://martinfowler.com/articles/201701-event-driven.html)
### Videos
- [Handling Concurrency with Message-IDs | Event Driven Architecture](https://www.youtube.com/watch?v=wefvl2ohiQc)
- [Message Naming Guidelines | Event Driven Architecture](https://www.youtube.com/watch?v=EmtOB2XexJI)
- [Event Versioning Guidelines](https://www.youtube.com/watch?v=L8eH1XaRnPw&list=PLThyvG1mlMzm2FyVpKDiU2c7VtrB2Zezg)
- [Organizing (Commands, Events & Handlers) in Microservices/SOA](https://www.youtube.com/watch?v=8j5ETvSSNpc)
- [Service Oriented Architecture: Commands & Events Explained!](https://www.youtube.com/watch?v=oJiUjiWeesQ)
- [Handling Duplicate Messages (Idempotent Consumers)](https://www.youtube.com/watch?v=xeBY8fCWfvU)
- [Sagas: Event Choreography & Orchestration (NServiceBus)](https://www.youtube.com/watch?v=rO9BXsl4AMQ)
- [CAP: Event Bus & Outbox Pattern](https://www.youtube.com/watch?v=dnhPzILvgeo&t=50s)
- [Thin or Fat Events? Are your boundaries right?](https://www.youtube.com/watch?v=vDtK-ccQWkw)
- [GOTO 2017 • The Many Meanings of Event-Driven Architecture • Martin Fowler](https://www.youtube.com/watch?v=STKCRSUsyP0)
### Library
- [Enexure.MicroBus](https://github.com/Lavinski/Enexure.MicroBus)
	> MicroBus is a simple in process Mediator for .NET

- [Foundatio](https://github.com/exceptionless/Foundatio)
	> A common interface with in memory, redis and azure implementations.
	
- [Kledex](https://github.com/lucabriguglia/Kledex)
	> .NET Standard framework to create simple and clean design. Advanced features for DDD, CQRS and Event Sourcing.
	
- [Mediator.Net](https://github.com/mayuanyang/Mediator.Net)
	> A simple mediator for .Net for sending command, publishing event and request response with pipelines supported.
	
- [MQTTnet](https://github.com/chkr1011/MQTTnet)
	> TTnet is a high performance .NET library for MQTT based communication.
	
- [OpenCQRS](https://github.com/OpenCQRS/OpenCQRS)
	>  .NET Core library for DDD, CQRS and Event Sourcing with Azure Service Bus integration. Supported database providers for the Command and the Event stores are: DocumentDB, MongoDB, SQL Server, MySQL, PostgreSQL and SQLite.
	
- [Rebus](https://github.com/rebus-org/Rebus)
	>  Simple and lean service bus implementation for .NET.
	
- [RestBus](https://github.com/tenor/RestBus)
	>  Messaging library for RabbitMq.
	
- [tossit](https://github.com/turgayozgur/tossit)
	> Simple, easy to use library for distributed job/worker logic. Distributed messages handled by built in RabbitMQ implementation.
	
- [Steeltoe](https://github.com/SteeltoeOSS/Steeltoe)
	> Steeltoe .NET Core Components: CircuitBreaker, Configuration, Connectors, Discovery, Logging, Management, and Security
	
- [MetroBus](https://github.com/GokGokalp/MetroBus)
	> Lightweight messaging wrapper of 
	
- [Abp](https://github.com/abpframework/abp/tree/15589f4c1fbd6323cc80a5ce597b1ebf32d9eb07/framework/src/Volo.Abp.EventBus)
	> Open Source Web Application Framework for ASP.NET Core
	
- [OpenSleigh](https://github.com/mizrael/OpenSleigh)
	> OpenSleigh is a Saga management library for .NET Core.

- [knightbus](https://github.com/BookBeat/knightbus)
	> Fast multi-transport messaging framework

- [SlimMessageBus](https://github.com/zarusz/SlimMessageBus)
	> Lightweight message bus interface for .NET (pub/sub and request-response) with transport plugins for popular message brokers.
	
- [silverback](https://github.com/BEagle1984/silverback)
	> Silverback is a simple but feature-rich framework to build reactive/event-driven applications or microservices with .net core.
	
- [Obvs](https://github.com/christopherread/Obvs)
	> An observable microservice bus library for .NET, that wraps the underlying message transports in simple Rx based interfaces.
	
- [Platibus](https://github.com/sweetlandj/Platibus)
	> Decentralized asynchronous messaging framework

- [EventBus](https://github.com/jacqueskang/EventBus)
	> A .NET Core ultra lightweight in-memory event bus implementation.
	
- [Enbiso.NLib](https://github.com/enbiso/Enbiso.NLib)
	> .Net Standard Libraries for Microservices

- [eventbus](https://github.com/tinglesoftware/eventbus)
	> A simple Event Bus abstraction layer for working with events in .NET.

- [AzureFromTheTrenches.Commanding](https://github.com/JamesRandall/AzureFromTheTrenches.Commanding)	
	> A configuration based commanding and mediator framework that supports command dispatch and execution in-process, over HTTP or over Azure Storage Queues. Written to .NET Standard 2.0 and supports many popular runtimes including .NET Core and .NET 4.6.x.

- [Brighter](https://github.com/BrighterCommand/Brighter.git)
	> Command Dispatcher, Processor, and Distributed Task Queue

- [Darker](https://github.com/BrighterCommand/Darker)
	> The query-side counterpart of Brighter

- [MassTransit](https://github.com/MassTransit/MassTransit)
	> Distributed Application Framework for .NET
	
- [ViennaNET](https://github.com/Raiffeisen-DGTL/ViennaNET)
	> Framework for quickly creating enterprise microservices on .NET Core
	
- [Fabrik.SimpleBus](https://github.com/benfoster/Fabrik.SimpleBus)
	> A simple In-Process Message Bus for .NET
	
- [MemBus](https://github.com/flq/MemBus/tree/master/MemBus)
	> Pure In-Memory Publish/Subscribe .NET Bus
	
### Books
- [Enterprise Integration Patterns](https://amazon.com/o/asin/0321200683/ref=nosim/enterpriseint-20)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Kafka

#### 📝 Articles
- [Event-Driven Architecture with Apache Kafka for .NET Developers Part 1 - Event Producer](https://thecloudblog.net/post/event-driven-architecture-with-apache-kafka-for-net-developers-part-1-event-producer/)

- [Event-Driven Architecture with Apache Kafka for .NET Developers Part 2 - Event Consumer](https://thecloudblog.net/post/event-driven-architecture-with-apache-kafka-for-.net-developers-part-2-event-consumer/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### RabbitMQ

#### 📝 Articles

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>


## Distributed Transactions

### 📝 Articles
- [Life Beyond Distributed Transactions: An Apostate's Implementation - A Primer](https://jimmybogard.com/life-beyond-transactions-implementation-primer/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Concurrency

### 📝 Articles
- [Handling concurrency – Aggregate Pattern and EF Core](http://www.kamilgrzybek.com/design/handling-concurrency-aggregate-pattern-and-ef-core/)

### Samples
- [https://github.com/kgrzybek/efcore-concurrency-handling](https://github.com/kgrzybek/efcore-concurrency-handling)
	> A repository showing how to handle concurrent conflicts using EntityFramework Core and DDD Aggregates

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
	
## Eventual Consistency

### 📝 Articles
- [Processing multiple aggregates – transactional vs eventual consistency](http://www.kamilgrzybek.com/design/processing-multiple-aggregates-transactional-vs-eventual-consistency/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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
- [Making Modular Monoliths Work](https://sookocheff.com/post/architecture/making-modular-monoliths-work/)
- [Loosely Coupled Monolith Overview](https://codeopinion.com/loosely-coupled-monolith/)
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

- [https://github.com/spetz/Confab-training](https://github.com/spetz/Confab-training)

- [https://github.com/anton-liauchuk/educational-platform](https://github.com/anton-liauchuk/educational-platform)
	> Modular Monolith Java application with DDD

### 📹 Videos
- [GOTO 2018 • Modular Monoliths • Simon Brown](https://www.youtube.com/watch?v=5OjqD-ow8GE)
- [Modular monoliths (Simon Brown) - 2016](https://www.youtube.com/watch?v=kbKxmEeuvc4)
- [Modular monoliths by Simon Brown](https://www.youtube.com/watch?v=h_rBDIC51C4)
- [Munich .NET Meetup: Modular Monolith Architecture - One to rule them all](https://www.youtube.com/watch?v=tpeOWlif1l4)
- [Majestic Modular Monoliths by Axel Fontaine](https://www.youtube.com/watch?v=BOvxJaklcr0)
- [Decompose your monolith-  when and how to incrementally refactor to microservices](https://vimeo.com/442842127/543b578f38)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## RESTful API Design

### 📝 Articles
- [Microsoft REST API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md)
- [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)
- [Web API design](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [RESTful API Design: 13 Best Practices to Make Your Users Happy](https://florimond.dev/blog/articles/2018/08/restful-api-design-13-best-practices-to-make-your-users-happy/)
- [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [Design Guidelines](http://apistylebook.com/design/guidelines/)
- [The Web API Checklist -- 43 Things To Think About When Designing, Testing, and Releasing your API](https://mathieu.fenniak.net/the-api-checklist/)
- [Design Topics](http://apistylebook.com/design/topics/)
- [Design Guidelines](http://apistylebook.com/design/guidelines/)
- [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Caching

### Articles
- [Where Is My Cache? Architectural Patterns for Caching Microservices](https://hazelcast.com/blog/architectural-patterns-for-caching-microservices/)
- [4 ways to update your cache](https://vishnu.hashnode.dev/4-ways-to-update-your-cache-ckn4c0jae0dq8efs152eu8hmq)
- [Simple In-Memory Caching in .Net Core with IMemoryCache](https://sahansera.dev/in-memory-caching-aspcore-dotnet/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Packaging

### 📝 Articles
- [Package by component and architecturally-aligned testing](http://www.codingthearchitecture.com/2015/03/08/package_by_component_and_architecturally_aligned_testing.html) - Simon Brown
- [Schools of Package Architecture - An Illustration](http://codemanship.co.uk/parlezuml/blog/?postid=539)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Refactoring

### Articles

### Videos
- [The refactoring test (1) - Dependency Inversion & Unit tests | Cracking the .NET interview](https://www.youtube.com/watch?v=U3QvTaw224o)
- [The refactoring test (2) - Open-Closed, Single Responsibility | Cracking the .NET interview](https://www.youtube.com/watch?v=Yd4GnWeEkIY&list=LL&index=10&t=1662s&ab_channel=NickChapsas)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Azure Application Architecture

### Resources
- [https://dotnet.microsoft.com/learn/azure/architecture](https://dotnet.microsoft.com/learn/azure/architecture)
- [The Azure Kubernetes Service (AKS) Architecture Map](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/the-azure-kubernetes-service-aks-architecture-map/ba-p/1078714)
- [The Cloud-native Azure Application Architect Map](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/the-cloud-native-azure-application-architect-map/ba-p/812242)
- [The Azure Infrastructure Architect Map](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/the-azure-infrastructure-architect-map/ba-p/766268)
- [The Azure Solution Architect Map](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/the-azure-solution-architect-map/ba-p/689700)
- [The Azure Security Architect Map](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/the-azure-security-architect-map/ba-p/714091)

### 📝 Articles
- [Cars Island Car Rental on the Azure cloud - part 1](https://daniel-krzyczkowski.github.io/Cars-Island-Car-Rental-On-Azure-Cloud/)

### 🔖 Samples
- [https://github.com/Daniel-Krzyczkowski/MicrosoftAzure](https://github.com/Daniel-Krzyczkowski/MicrosoftAzure)
	> Microsoft Azure code samples.

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
	
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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Azure Service Bus

#### 📝 Articles
- [Asynchronous messaging with Azure Service Bus](https://daniel-krzyczkowski.github.io/Asynchronous-Messaging-With-Azure-Service-Bus/)
- [Local Development with Azure Service Bus](https://jimmybogard.com/local-development-with-azure-service-bus/)
#### Videos
- [Asynchronous messaging with Azure Service Bus](https://www.youtube.com/watch?v=aJn5CDhWvJQ)
- [On .NET Live - Messaging Patterns for .NET Developers](https://www.youtube.com/watch?v=ef1DK76rseM)
#### Samples
- [https://github.com/Azure/azure-service-bus/tree/master/samples](https://github.com/Azure/azure-service-bus/tree/master/samples)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Azure Functions

#### 📝 Articles
- [Build event-driven solutions with Azure Functions and Cosmos DB](https://www.youtube.com/watch?v=8WMjRIw6QzQ)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Azure Template
- [Be more efficient developer with Azure Developer Starter Pack](https://daniel-krzyczkowski.github.io/Be-More-Efficient-Developer-With-Azure-Developer-Starter-Pack/)
#### 📝 Articles

#### 📹 Videos
- [Be more efficient developer with Azure Developer Starter Pack](https://www.youtube.com/watch?v=8XJQLaWAPro)

#### 🔖 Samples
- [https://github.com/Daniel-Krzyczkowski/AzureDeveloperTemplates](https://github.com/Daniel-Krzyczkowski/AzureDeveloperTemplates)
	> This repository contains helpful code templates for Azure cloud developers.

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
	
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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Use Case Diagram 

#### 📝 Articles
- [UML Use Case Diagram: Tutorial with EXAMPLE](https://www.guru99.com/use-case-diagrams-example.html)
- [UML 2 Use Case Diagramming Guidelines](http://agilemodeling.com/style/useCaseDiagram.htm)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Class Diagram (Class Modeling)

#### 📝 Articles
- [UML Class Diagram Tutorial with Examples](https://www.guru99.com/uml-class-diagram.html)
- [What is Class Diagram?](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-class-diagram/)
- [Data Modeling 101](http://www.agiledata.org/essays/dataModeling101.html)
- [UML 2 Class Diagramming Guidelines](http://agilemodeling.com/style/classDiagram.htm)

###  Component Diagram

#### 📝 Articles
- [UML 2 Component Diagramming Guidelines](http://agilemodeling.com/style/componentDiagram.htm)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Logical Modeling

#### 📝 Articles
- [How to Implement a Conceptual, Logical, and Physical Data Model in Vertabelo](https://vertabelo.com/blog/conceptual-logical-and-physical-data-model/)
- [What Are Conceptual, Logical, and Physical Data Models?](https://vertabelo.com/blog/conceptual-logical-physical-data-model/)
- [Vertabelo Features: Logical Diagrams](https://vertabelo.com/blog/logical-diagrams/)

#### 📹 Videos 
- [Logical Data Modeling with Diagrams.Net](https://www.youtube.com/watch?v=CmjW3HyazRA)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Physical Modeling

#### 📝 Articles
- [How to Implement a Conceptual, Logical, and Physical Data Model in Vertabelo](https://vertabelo.com/blog/conceptual-logical-and-physical-data-model/)
- [What Are Conceptual, Logical, and Physical Data Models?](https://vertabelo.com/blog/conceptual-logical-physical-data-model/)
- [How to Create Physical Diagrams in Vertabelo](https://vertabelo.com/blog/create-physical-diagrams-in-vertabelo/)
- [Reverse Engineering With Vertabelo](https://vertabelo.com/blog/reverse-engineering-with-vertabelo/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Tools
- [Diagrams.Net](https://www.diagrams.net)
- [Vertabelo](https://vertabelo.com)
- [Reverse engineering - vertabelo](https://vertabelo.com/documentation/physical-model/reverse-engineering-doc/)
- [LucidChart](https://www.lucidchart.com/pages/)
- [Top 7 Entity Relationship (ER) Diagram Online Tools](https://vertabelo.com/blog/er-diagram-tools/)
- [Visual Paradigm](https://www.visual-paradigm.com)
- [Creately](https://creately.com)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Event Storming

### Resources
- [https://github.com/mariuszgil/awesome-eventstorming](https://github.com/mariuszgil/awesome-eventstorming)
- [https://github.com/ddd-crew/eventstorming-glossary-cheat-sheet](https://github.com/ddd-crew/eventstorming-glossary-cheat-sheet)
- [https://github.com/wwerner/event-storming-cheatsheet](https://github.com/wwerner/event-storming-cheatsheet)

### 📝 Articles
- [Reactive in practice, Unit 1: Event storming the stock trader domain](https://developer.ibm.com/technologies/java/tutorials/reactive-in-practice-1/)
- [Event Storming](https://ibm-cloud-architecture.github.io/refarch-eda/methodology/event-storming/)
- [Event storming analysis](https://ibm-cloud-architecture.github.io/refarch-kc/implementation/event-storming-analysis/)
- [Detailed Agenda of a DDD Big Picture Event Storming - Part 1](https://philippe.bourgau.net/detailed-agenda-of-a-ddd-big-picture-event-storming-part-1/)
- [Detailed Agenda of a DDD Big Picture Event Storming - Part 2](https://philippe.bourgau.net/detailed-agenda-of-a-ddd-big-picture-event-storming-part-2/)
- [Detailed Agenda of a DDD Big Picture Event Storming - Part 3](https://philippe.bourgau.net/detailed-agenda-of-a-ddd-big-picture-event-storming-part-3/)
- [More Efficient Domain Modeling with EventStorming](https://buildplease.com/pages/modeling-better/)
- [Modelling Reactive Systems with Event Storming and Domain-Driven Design](https://blog.redelastic.com/corporate-arts-crafts-modelling-reactive-systems-with-event-storming-73c6236f5dd7)
- [Detailed agenda for a DDD Design-Level Event Storming - part 1](https://philippe.bourgau.net/detailed-agenda-for-a-ddd-design-level-event-storming-part-1/)
- [Detailed agenda for a DDD Design-Level Event Storming - part 2](https://philippe.bourgau.net/detailed-agenda-for-a-ddd-design-level-event-storming-part-2/)
- [Why should we use Design Level Event Storming for DDD?](https://philippe.bourgau.net/why-should-we-use-design-level-event-storming-for-ddd/)
- [7 tactics that will make your DDD Design-Level Event Storming pay-off](https://philippe.bourgau.net/7-tactics-that-will-make-your-ddd-design-level-event-storming-pay-off/)
- [EventStorming; Core concepts, glossary and legend](https://baasie.com/2020/07/16/eventstorming-core-concepts-glossary-and-legend/)
- [A step by step guide to Event Storming – our experience](https://www.boldare.com/blog/event-storming-guide/)
- [EventStorming – From Big Picture to Software Design](https://www.agilepartner.net/en/eventstorming-from-big-picture-to-software-design/)
- [What is EventStorming?](https://medium.com/techlabs-emag/what-is-event-storming-ed1a0e519fad)
- [The introduction to Big Picture Eventstorming.v1](https://locastic.com/blog/intro-to-big-picture-eventstorming/)
- [The introduction to Big Picture Eventstorming.v2](https://locastic.com/blog/the-introduction-to-big-picture-eventstorming-v2/)
- [Event Storming: How It Will Improve Your Business Processes?](https://selleo.com/blog/event-storming-how-it-will-improve-your-business-processes-)
- [Remote EventStorming](https://blog.avanscoperta.it/2020/03/26/remote-eventstorming/)
- [EventStorming cheat sheet](https://baasie.com/2019/07/29/eventstorming-cheat-sheet/)
- [EventStorming tools, what is in my flight case!](https://baasie.com/2019/05/08/eventstorming-tools-what-is-in-my-flight-case/)
- [Discovering complex domain with Event Storming](https://solidstudio.io/blog/discovering-domain-with-event-storming)
- [Decomposing the Monolith with Event Storming](https://medium.com/capital-one-tech/event-storming-decomposing-the-monolith-to-kick-start-your-microservice-architecture-acb8695a6e61)
- [Big Picture Event Storming](https://medium.com/@chatuev/big-picture-event-storming-7a1fe18ffabb)
- [EventStorming cheat sheet](https://xebia.com/blog/eventstorming-cheat-sheet/)
### 📹 Videos 
- [Scoping and Organizing .NET Microservices Using Event Storming](https://www.pluralsight.com/courses/dotnet-microservices-scoping-organizing)
- [GOTO 2018 • 50.000 Orange Stickies Later • Alberto Brandolini](https://www.youtube.com/watch?v=NGXl1D-KwRI)
- [Crunching 'real-life stories' with DDD & Event Storming - Kenny Baas-Schwegler - KanDDDinsky 201](https://www.youtube.com/watch?v=WvkBKvMnyuc)
- [Event Storming demo & discussion](https://www.youtube.com/watch?v=xIB_VQVVWKk)
### Samples

- [Event Storming](https://miro.com/app/board/o9J_kt3rZb4=/?fromEmbed=1)

- [Decomposing the Monolith with Event Storming](https://medium.com/capital-one-tech/event-storming-decomposing-the-monolith-to-kick-start-your-microservice-architecture-acb8695a6e61)

- [https://github.com/RagDhiman/M4-Organizing-Your-.NET-Microservices-MegaService](https://github.com/RagDhiman/M4-Organizing-Your-.NET-Microservices-MegaService)
	> Scoping and Organizing .NET Microservices Using Event Storming

- [https://github.com/RagDhiman/M4-Organizing-Your-.NET-Microservices-Organized](https://github.com/RagDhiman/M4-Organizing-Your-.NET-Microservices-Organized)
	> Scoping and Organizing .NET Microservices Using Event Storming
	
- [https://github.com/RagDhiman/Miro-Event-Storming-Steps-JPEGs](https://github.com/RagDhiman/Miro-Event-Storming-Steps-JPEGs)
	> Scoping and Organizing .NET Microservices Using Event Storming

- [https://github.com/RagDhiman/Miro-Event-Storming-Steps](https://github.com/RagDhiman/Miro-Event-Storming-Steps)	
	> Scoping and Organizing .NET Microservices Using Event Storming
	
	
### Books
- [Introducing EventStorming](https://leanpub.com/introducing_eventstorming) - Alberto Brandolini

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Engineering Blogs
- [Uber](https://eng.uber.com)
- [Twitter](https://blog.twitter.com/engineering/en_us.html)
- [Netflix Engineering Blog](https://netflixtechblog.com/?gi=133ebc0bdafe)
- [Netflix Architecture Blog](https://netflixtechblog.com/tagged/architecture)
- [Amazon](https://aws.amazon.com/blogs/aws/)
- [Amazon Architecture blog](https://aws.amazon.com/blogs/architecture/)
- [https://github.com/kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

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
- [Software Architecture with C# 9 and .NET 5 - Second Edition](https://www.packtpub.com/product/software-architecture-with-c-9-and-net-5-second-edition/9781800566040)
- [An Atypical ASP.NET Core 5 Design Patterns Guide](https://www.packtpub.com/product/an-atypical-asp-net-core-5-design-patterns-guide/9781789346091)
- [Architectural Patterns: Uncover essential patterns in the most indispensable realm of enterprise architecture](https://www.amazon.com/Architectural-Patterns-indispensable-enterprise-architecture-ebook/dp/B077T7V8RC)
- [Software Architect’s Handbook: Become a successful software architect by implementing effective architecture concepts](https://www.amazon.com/Software-Architects-Handbook-implementing-architecture-ebook/dp/B07B3R2ZCX/)
- [Solutions Architect's Handbook: Kick-start your solutions architect career by learning architecture design principles and strategies](https://www.amazon.com/Solutions-Architects-Handbook-Kick-start-architecture-ebook/dp/B0855XQZ44)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
## Other Resources

- [Software architect roadmap](https://github.com/AlaaAttya/software-architect-roadmap)
	
- [How to Learn Software Design and Architecture | The Full-stack Software Design & Architecture Map](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/)

- [https://github.com/simskij/awesome-software-architecture](https://github.com/simskij/awesome-software-architecture)

- [https://github.com/Developer-Y/Scalable-Software-Architecture](https://github.com/Developer-Y/Scalable-Software-Architecture)

- [https://github.com/binhnguyennus/awesome-scalability](https://github.com/binhnguyennus/awesome-scalability)

- [https://github.com/mfornos/awesome-microservices](https://github.com/mfornos/awesome-microservices)

- [System Design](https://www.youtube.com/playlist?list=PLkQkbY7JNJuBoTemzQfjym0sqbOHt5fnV) - Tech Dummies Narendra L

- [Modular Monoliths](https://files.gotocon.com/uploads/slides/conference_12/515/original/gotoberlin2018-modular-monoliths.pdf)

- [study-path](https://github.com/joebew42/study-path)
	> An organized learning path about Clean Code, Test-Driven Development, Legacy Code, Refactoring, Domain-Driven Design and Microservice Architecture
	
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>