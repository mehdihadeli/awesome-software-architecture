# Awesome .Net Architecture [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

![Twitter URL](https://img.shields.io/badge/-@mehdi_hadeli-%231DA1F2?style=flat-square&logo=twitter&logoColor=ffffff) 
[![blog](https://img.shields.io/badge/blog-dotnetuniversity.com-brightgreen?style=flat-square)](https://dotnetuniversity.com/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](./contributing.md)

> Collection of useful articles and resources to learning and practicing about software architecture, patterns and principles in .Net platform. this repository will be updated continuously, keep yourself up to date 

Contributions are always welcome! Please take a look at the [contribution guidelines](https://github.com/mehdihadeli/awesome-dotnet-architecture/blob/master/contributing.md) pages first.

Thanks to all [contributors](https://github.com/mehdihadeli/awesome-dotnet-architecture/graphs/contributors), you're awesome and wouldn't be possible without you! The goal is to build a categorized community-driven collection of very well-known resources.

Check out my [blog](https://dotnetuniversity.com) or find me on [Linkedin](https://www.linkedin.com/in/mehdihadeli/) or [Twitter](https://twitter.com/mehdi_hadeli)!


## Contents
- [Architectural principles](architectural-principles)
  - [Traditional N-Layer Architecture](traditional-n-layer-architecture)
  - [Vertical Slice Architecture](#vertical-slice-architecture)
  - [Clean Architecture](#clean-architecture)
  - [Onion Architecture](#onion-architecture)
  - [Ports And Adapters Architecture](ports-and-adapters-architecture)
- [Design Principles](#design-principles)
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
  - [DRY)](#dry)
  - [KISS](#kiss)
  - [YAGNI](#yagni)
  - [Minimize Coupling](#minimize-coupling) 
  - [Maximize Cohesion](#maximize-cohesion) 
- [Anti Patterns](#anti-patterns)
  - [Anemic Domain Model](anemic-domain-model)
- [Modular Monolith](#modular-monolith)
- [DDD](#ddd)
  - [Value Objects](#value-objects)
  - [Domain](#domain)
  - [Domain Primitives](#domain-primitives)
  - [Samples](#samples)
- [MicroServices](#microservices)
  - [Samples](#samples)

### Architectural principles

#### Traditional N-Layer Architecture

##### Articles

- [Traditional "N-Layer" architecture applications](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#traditional-n-layer-architecture-applications)


#### Clean Architecture

##### Articles
- [Clean architecture](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#clean-architecture)
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [CQRS Translated to Clean Architecture](https://blog.fals.io/2018-09-19-cqrs-clean-architecture/)
- [A Brief Intro to Clean Architecture, Clean DDD, and CQRS](https://blog.jacobsdata.com/2020/02/19/a-brief-intro-to-clean-architecture-clean-ddd-and-cqrs)
- [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/)
- [Clean architecture series — Part 3](https://dev.to/pereiren/clean-architecture-series-part-3-2795)
- [Common web application architectures](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures)
- [Asp.net core series 63 domain model architecture eShopOnWeb project analysis](https://www.itworkman.com/89255.html)
- [Analysis of Equinox open source project under asp.net core series 62 CQRS architecture](https://www.cnblogs.com/MrHSR/p/10820545.html)
- [Equinox open source projects analyzed under the framework CQRS](https://www.programmersought.com/article/81052035363/)
- [Comprehensive understanding of domain model architecture combined with eShopOnWeb](https://www.programmersought.com/article/97275046219/)
##### Videoes
- [Clean Testing - Clean Architecture with .NET Core - Jason Taylor - NDC Oslo 2020](https://www.youtube.com/watch?v=T6NRcX1vnz8)
- [Clean Architecture with ASP.NET Core 3.0 - Jason Taylor](https://www.youtube.com/watch?v=5OtUm1BLmG0)
- [Clean Architecture with ASP.NET Core 2.1 - Jason Taylor](https://www.youtube.com/watch?v=_lwCVE_XgqI&feature=youtu.be)
- [Clean Architecture with ASP.NET Core with Steve "Ardalis" Smith (2020-06-01)](https://www.youtube.com/watch?v=joNTQy-KXiU&t=1719s) - Steve Smith
- [SLC.NET Presents: Steve Smith (@Ardalis) - Clean Architecture with ASP.NET Core](https://www.youtube.com/watch?v=tYoqmL6e4oY) - Steve Smith
- [Tour of Microsoft's Reference ASP NET Core App eShopOnWeb](https://www.youtube.com/watch?v=rSpF1s8wcyA) - Steve Smith
- [An Overview of eShopOnWeb, an ASP.NET Core Reference Application](https://www.youtube.com/watch?v=vRZ8ucGac8M&ab_channel=Ardalis) - Steve Smith

##### Samples

- [https://github.com/EduardoPires/EquinoxProject](https://github.com/EduardoPires/EquinoxProject) - Eduardo Pires
> Full ASP.NET Core 3.1 application with DDD, CQRS and Event Sourcing concepts

- [https://github.com/dotnet-architecture/eShopOnWeb](https://github.com/dotnet-architecture/eShopOnWeb) - Steve Smith
> Sample ASP.NET Core 5.0 reference application, powered by Microsoft, demonstrating a layered application architecture with monolithic deployment model. Download the eBook PDF from docs folder.

- [https://github.com/JacobsDataSolutions/OrgManager](https://github.com/JacobsDataSolutions/OrgManager)
> CQRS and Clean Domain-Driven Design concepts on the ASP.NET Core stack. Demo application for a fictional corporate organization management tool.

- [https://github.com/matthewrenze/clean-architecture-demo](https://github.com/matthewrenze/clean-architecture-demo)
> A sample app for my presentation on Clean Architecture: Patterns, Practices, and Principles

- [https://github.com/jasontaylordev/NorthwindTraders](https://github.com/jasontaylordev/NorthwindTraders) - Jason Taylor
> Northwind Traders is a sample application built using ASP.NET Core and Entity Framework Core.

- [https://github.com/ardalis/cleanarchitecture](https://github.com/ardalis/cleanarchitecture) - Steve Smith
> A starting point for Clean Architecture with ASP.NET Core

### Onion Architecture

#### Articles
- [Onion Architecture In ASP.NET Core With CQRS – Detailed](https://codewithmukesh.com/blog/onion-architecture-in-aspnet-core/) - CodeWithMukesh
- [Onion Architecture](https://herbertograca.com/2017/09/21/onion-architecture/) - Herberto Graca
- [The Onion Architecture : part 1](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1) - Jeffrey Palermo
- [The Onion Architecture : part 2](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-2) - Jeffrey Palermo
- [The Onion Architecture : part 3](https://jeffreypalermo.com/2008/08/the-onion-architecture-part-3) - Jeffrey Palermo
- [Clean architecture series — Part 2](https://dev.to/pereiren/clean-architecture-series-part-2-49db)


### Ports And Adapters Architecture

#### Articles
- [Ports & Adapters Architecture](https://herbertograca.com/2017/09/14/ports-adapters-architecture/) - Herberto Graca
- [Hexagonal architecture](https://alistair.cockburn.us/hexagonal-architecture/) - Alistair Cockburn
- [Clean architecture series - Part 1](https://dev.to/pereiren/clean-architecture-series-part-1-m64)

### Vertical Slice Architecture

#### Articles
- [Vertical Slice Architecture](https://jimmybogard.com/vertical-slice-architecture/)

### Modular Monolith

#### Articles
- [My experience of using modular monolith and DDD architectures](https://www.thereformedprogrammer.net/my-experience-of-using-modular-monolith-and-ddd-architectures/)

#### Samples
- [https://github.com/kgrzybek/modular-monolith-with-ddd](https://github.com/kgrzybek/modular-monolith-with-ddd)
> Full Modular Monolith application with Domain-Driven Design approach.

- [https://github.com/kgrzybek/modular-monolith-with-ddd-fe-react](https://github.com/kgrzybek/modular-monolith-with-ddd-fe-react)
> FrontEnd React application for Modular Monolith With DDD repository and system

### Design Principles
- [Principles](https://deviq.com/principles/principles-overview) - DevIQ
- [10 Crucial Software Development Principles to Live By](https://www.laneways.agency/software-development-principles/)
- [10 OOP Design Principles Every Programmer Should Know](https://hackernoon.com/10-oop-design-principles-every-programmer-should-know-f187436caf65)
- [Design Principles](https://java-design-patterns.com/principles/) - java-design-patterns.com
- [Principles](http://principles-wiki.net/principles:start) - principles-wiki.net
#### Cross Cutting Concerns

##### Articles
- [Managing Cross Cutting Concerns – Logging](https://www.cshandler.com/2015/10/managing-cross-cutting-concerns-logging.html#.YCA5VOlR0uV)
- [Cross cutting concern example](https://stackoverflow.com/questions/23700540/cross-cutting-concern-example)
- [cross cutting concern](https://medium.com/anatta-design/cross-cutting-concern-aadf4f51a5c1)
- [Cross-Cutting Concerns for An Enterprise Application](https://dzone.com/articles/cross-cutting-concerns-for-an-enterprise-applicati)
- [Terminology: cross cutting concern](https://crosscuttingconcerns.com/Terminology-cross-cutting-concern)
- [Crosscutting Concerns](https://oncodedesign.com/crosscutting-concerns/)
- [Using the Decorator Pattern to handle cross-cutting concerns](https://www.davideguida.com/using-decorators-to-handle-cross-cutting-concerns/)
- [Chain of Responsibility pattern for handling cross-cutting concerns](https://arturkrajewski.silvrback.com/chain-of-responsibility-pattern-for-handling-cross-cutting-concerns)

#### KISS

##### Articles

- [KISS](https://java-design-patterns.com/principles/#kiss)  - java-design-patterns
- [Principles of Good Programming](https://www.artima.com/weblogs/viewpost.jsp?thread=331531)
- [Keep It Simple Stupid (KISS)](http://principles-wiki.net/principles:keep_it_simple_stupid) - principles-wiki
- [Keep It Simple](https://deviq.com/principles/keep-it-simple) - DevIQ

#### YAGNI

##### Articles
- [YAGNI](https://deviq.com/principles/yagni) - DevIQ
- [YAGNI](https://java-design-patterns.com/principles/#yagni) - java-design-patterns

### Anti Patterns

- [Anti Patterns](https://deviq.com/antipatterns/antipatterns-overview) - DevIQ


### DDD

#### Value Objects

##### Articles
- [Treating Primitive Obsession with ValueObjects | DDD in .NET](https://www.youtube.com/watch?v=h4uldNA1JUE)

#### Domain 
- [Always-Valid Domain Model](https://enterprisecraftsmanship.com/posts/always-valid-domain-model/) - Vladimir Khorikove

#### Domain Primitives

##### Articles
- [My Take On Domain Primitives](https://svenhuebner-it.com/my-take-on-domain-primitives/) - Sven Hübner
- [Domain Primitives I: easily declaring domain primitives](https://svenhuebner-it.com/domain-primitives-i-easily-declaring-domain-primitives/) - Sven Hübner 

#### Samples

- [https://github.com/kimcu-on-thenet/ddd-net-ef-core](https://github.com/kimcu-on-thenet/ddd-net-ef-core)
> Self study: DDD, .net core, entity framework core

- [https://github.com/thangchung/blog-core](https://github.com/thangchung/blog-core)
> Modular blog using Blazor with clean domain-driven design patterns

- [https://github.com/thangchung/practical-clean-ddd](https://github.com/thangchung/practical-clean-ddd)
> The repository uses the eCommerce business domain to demonstrate how to apply Domain Driven Design, Clean Architecture, and Microservice Architecture patterns.

- [https://github.com/ardalis/ddd-guestbook](https://github.com/ardalis/ddd-guestbook)
> A DDD guestbook example written for ASP.NET Core

### MicroServices

### Articles

### Tools

- [https://github.com/dotnet/tye](https://github.com/dotnet/tye)
> Tye is a tool that makes developing, testing, and deploying microservices and distributed applications easier. Project Tye includes a local orchestrator to make developing microservices easier and the ability to deploy microservices to Kubernetes with minimal configuration.

### Samples
- [https://github.com/vietnam-devs/coolstore-microservices](https://github.com/vietnam-devs/coolstore-microservices)
> A full-stack .NET microservices build on Dapr and Tye

- [https://github.com/thangchung/practical-dapr](https://github.com/thangchung/practical-dapr)
> A full-stack .NET microservices build on Dapr and Tye

- [https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices](https://github.com/kimcu-on-thenet/dapr-tye-simple-microservices)
> An example of building .NET Core microservices with Dapr and Tye