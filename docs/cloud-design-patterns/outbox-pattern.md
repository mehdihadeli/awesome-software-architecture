# At-least-Once Delivery (Outbox Pattern)

## 📕 Articles
- [Sending Reliable Event Notifications with Transactional Outbox Pattern](https://medium.com/event-driven-utopia/sending-reliable-event-notifications-with-transactional-outbox-pattern-7a7c69158d1b)
- [At-least-once Delivery](https://www.cloudcomputingpatterns.org/at_least_once_delivery/) - cloudcomputingpatterns.org
- [The Outbox Pattern - Kamil Grzybek](http://www.kamilgrzybek.com/design/the-outbox-pattern/) 
- [The Outbox Pattern in Event-Driven ASP.NET Core Microservice Architectures](https://itnext.io/the-outbox-pattern-in-event-driven-asp-net-core-microservice-architectures-10b8d9923885)
- [Refactoring Towards Resilience: Evaluating Coupling](https://jimmybogard.com/refactoring-towards-resilience-evaluating-coupling/)
- [A better domain events pattern](https://lostechies.com/jimmybogard/2014/05/13/a-better-domain-events-pattern/)
- [Outbox Pattern for Microservices Architectures](https://medium.com/design-microservices-architecture-with-patterns/outbox-pattern-for-microservices-architectures-1b8648dfaa27)
- [Outbox, Inbox patterns and delivery guarantees explained](https://event-driven.io/en/outbox_inbox_patterns_and_delivery_guarantees_explained/)
- [Outbox Pattern: Reliably Save State & Publish Events](https://codeopinion.com/outbox-pattern-reliably-save-state-publish-events/)
- [Handling Duplicate Messages (Idempotent Consumers)](https://codeopinion.com/handling-duplicate-messages-idempotent-consumers/)
- [CAP: Event Bus & Outbox Pattern](https://codeopinion.com/cap-event-bus-outbox-pattern/)
- [Reliable Microservices Data Exchange With the Outbox Pattern](https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/)
- [Implementing the Outbox Pattern Using Hangfire and MediatR CQRS Handlers](https://www.fusonic.net/en/blog/cqrs-outbox-with-hangfire)
- [Push-based Outbox Pattern with Postgres Logical Replication](https://event-driven.io/en/push_based_outbox_pattern_with_postgres_logical_replication/)
- [Microservices 101: Transactional Outbox and Inbox](https://softwaremill.com/microservices-101/)
- [Message delivery and deduplication strategies](https://softwaremill.com/message-delivery-and-deduplication-strategies/)
- [How Postgres sequences issues can impact your messaging guarantees](https://event-driven.io/en/ordering_in_postgres_outbox/)
- [How to get all messages through Postgres logical replication](https://event-driven.io/en/how_to_get_all_messages_through_postgres_logical_replication/)
- [What happens if we lose some event(s) during transaction?](https://bozd4g.medium.com/what-happens-if-we-lose-some-events-during-transaction-607e7b08b77)
## 📺 Videos
- [Reliably Save State & Publish Events (Outbox Pattern)](https://www.youtube.com/watch?v=u8fOnxAxKHk)
- [CAP: Event Bus & Outbox Pattern](https://www.youtube.com/watch?v=dnhPzILvgeo)
- [Inbox & Outbox pattern - transactional message processing [Microservices .NET]](https://www.youtube.com/watch?v=ebyR5RPKciw)
- [[Stream Archive | 2020-03-27] Start event driven integration between services (feat. outbox pattern)](https://www.youtube.com/watch?v=_W3rXyv2i2A)
- [[Stream Archive | 2020-04-10] Implementing the outbox message publisher](https://www.youtube.com/watch?v=M9so8hHuerE)
- [[Stream Archive | 2020-04-17] Continuing the outbox message publisher and adding a fallback](https://www.youtube.com/watch?v=eGPhF_0tCE4)
- [Event-driven integration #1 - Intro to the transactional outbox pattern [ASPF02O|E040]](https://www.youtube.com/watch?v=suKSJ5DvynA)
- [Event-driven integration #4 - Outbox publisher (feat. IHostedService & Channels) [ASPF02O|E043]](https://www.youtube.com/watch?v=xnn6AnYyC5g)
- [Outbox meets change data capture (feat. .NET, PostgreSQL, Kafka and Debezium)](https://www.youtube.com/watch?v=WcmLvoxs9ps)
- [Outbox meets change data capture - hooking into the Write-Ahead Log (feat. .NET, PostgreSQL & Kafka)](https://www.youtube.com/watch?v=4rnSzEd9jPI)

## 📦 Libraries
- [oskardudycz/PostgresOutboxPatternWithCDC.NET](https://github.com/oskardudycz/PostgresOutboxPatternWithCDC.NET) - PoC of doing Outbox Pattern with CDC and .NET
- [cfrenzel/Eventfully](https://github.com/cfrenzel/Eventfully) - Lightweight Reliable Messaging Framework using Outbox Pattern / EFCore / AzureServiceBus
## 🚀 Samples
- [joaofbantunes/PostgresChangeDataCaptureOutboxSample](https://github.com/joaofbantunes/PostgresChangeDataCaptureOutboxSample) - Tiny event driven sample application, using change data capture, via Npgsql, to help implement the outbox pattern
- [seralaci/dotnet-microservices-data-exchange-with-outbox-pattern-debezium](https://github.com/seralaci/dotnet-microservices-data-exchange-with-outbox-pattern-debezium) - True Atomic Microservices Implementation with Debezium and Outbox Pattern to Ensure Data Consistency.
- [oskardudycz/kafka-connect](https://github.com/oskardudycz/kafka-connect)
- [bozd4g/FB.TransactionalOutbox](https://github.com/bozd4g/FB.TransactionalOutbox) - A sample Transactional Outbox Pattern implementation written with .NET Core.