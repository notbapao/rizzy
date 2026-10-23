import BlinkingText from "@/components/BlinkingText";
import Container from "@/components/Container";
import OnViewAnimation from "@/components/OnViewAnimation";
import Paragraph from "@/components/Paragraph";
import SectionWrapper from "@/components/SectionWrapper";
import Avatar from "@/assets/avatar.png";
import { DOMAIN } from "@/constants";
import CustomHead from "@/utils/CustomHead";

const About = () => {
  return (
    <>
      <CustomHead
        {...{
          title: "About | Rizzy Personal Website",
          description:
            "Learn about Rizky Verandi's backend engineering experience, technical skills, and tools, from Node.js and TypeScript to Azure and microservices.",
          imageUrl: Avatar.src,
          slug: "about",
          keywords: [
            "about",
            "story",
            "background",
            "skills",
            "tools",
            "contacts",
          ],
          type: "website",
          robots: "follow, index",
          locale: "id_ID",
          canonicalUrl: `${DOMAIN}/about/`,
        }}
      />
      <SectionWrapper>
        <Container className="py-20">
          <div className="flex flex-col gap-14">
            <h1 className="flex text-6xl font-bold">
              About <BlinkingText text="." />
            </h1>
            <Paragraph>
              I&apos;m Rizky Verandi, a Backend Engineer based in West Jakarta,
              Indonesia, with four years of experience building secure,
              high-performance applications. My core stack is Node.js and
              TypeScript, with a focus on Clean Architecture, CQRS, domain-driven
              design, and event-driven microservices.
            </Paragraph>
            <Paragraph>
              I currently work at Indocyber Global, placed at Astra SERA on
              AstraFMS 2.0, building backend services for an enterprise Fleet
              Management System. Previously, I developed enterprise logistics
              applications at PT Boon Software and C# / ASP.NET MVC services at
              PT Bintang Toedjoe Indonesia. I also build business websites for
              clients across several industries.
            </Paragraph>

            <OnViewAnimation headerText="Skills">
              <ul className="text-xl text-copy-secondary flex flex-col leading-9">
                <li className="font-semibold">
                  Languages: TypeScript (strong), C#, SQL; familiar with Golang
                  and Python.
                </li>
                <li className="font-semibold">
                  Backend &amp; Architecture: Node.js, Express.js, RESTful APIs,
                  Clean Architecture, CQRS, Microservices, Event-Driven
                  Architecture, Domain-Driven Design.
                </li>
                <li className="font-semibold">
                  Messaging &amp; Workflows: Azure Service Bus, Temporal;
                  familiar with Kafka and RabbitMQ.
                </li>
                <li className="font-semibold">
                  Cloud &amp; DevOps: Azure, Kubernetes, Docker, ArgoCD,
                  CI/CD pipelines, Cloudflare.
                </li>
                <li className="font-semibold">
                  Databases: Azure Cosmos DB, SQL Server, Oracle, MongoDB.
                </li>
                <li className="font-semibold">
                  Frontend: Next.js for enterprise applications and business
                  websites.
                </li>
              </ul>
            </OnViewAnimation>
            <OnViewAnimation headerText="Tools">
              <ul className="text-xl text-copy-secondary flex flex-col leading-9">
                <li className="font-semibold">
                  Development: Neovim (Nvim), tmux, Linux (Ubuntu 24 LTS /
                  Unix-like).
                </li>
                <li className="font-semibold">
                  Version Control &amp; Monorepos: Git, SVN, Nx.
                </li>
                <li className="font-semibold">
                  Collaboration: Agile, Scrum, Jira.
                </li>
              </ul>
            </OnViewAnimation>
            <OnViewAnimation headerText="Contact">
              <ul className="text-xl text-copy-secondary flex flex-col leading-9">
                <li className="font-semibold flex gap-2">
                  Email:{" "}
                  <a
                    href="mailto:rizverandi@gmail.com"
                    target="_blank"
                    className="hover-link underline"
                  >
                    rizverandi@gmail.com
                  </a>
                </li>
                <li className="font-semibold flex gap-2">
                  <a
                    href="https://github.com/notbapao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-link underline"
                  >
                    GitHub
                  </a>
                </li>
                <li className="font-semibold flex gap-2">
                  <a
                    href="https://x.com/enkumusic"
                    target="_blank"
                    className="hover-link underline"
                  >
                    Twitter
                  </a>
                </li>
                <li className="font-semibold flex gap-2">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/rizkyverandi/"
                    target="_blank"
                    className="hover-link underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </OnViewAnimation>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default About;
