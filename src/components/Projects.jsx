import styled from "styled-components";
import { Heading, SectionDescription } from "../styles/sharedStyles";
import { BaseContainer } from "../styles/sharedStyles";
import { useEffect, useRef } from "react";

// Styled component for the video
const Video = styled.video`
  width: 100%;
  max-width: 700px;
  margin: 20px 0;
`;

const GridContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 1rem;
  padding: 0rem;
`;

const VideoDescriptionContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: ${(props) => props.bgColor || "#e0e0e0"};
  color: ${(props) => props.color || "#333"};
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: bold;
`;

const SecondVideo = styled(Video)`
  max-width: 600px;
`;

const ThirdVideo = styled(Video)`
  max-width: 800px;
`;

const Project2 = styled.div`
  grid-row: 2;
  grid-column: 1;
`;

const Project3 = styled.div`
  grid-row: 2;
  grid-column: 2;
`;

const ProjectsContainer = styled(BaseContainer)``;

function Projects() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef1.current.play();
        } else {
          videoRef1.current.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef2.current.play();
        } else {
          videoRef2.current.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef3.current.play();
        } else {
          videoRef3.current.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef1.current) {
      observer1.observe(videoRef1.current);
    }

    if (videoRef2.current) {
      observer2.observe(videoRef2.current);
    }

    if (videoRef3.current) {
      observer3.observe(videoRef3.current);
    }

    return () => {
      if (videoRef1.current) {
        observer1.unobserve(videoRef1.current);
      }
      if (videoRef2.current) {
        observer2.unobserve(videoRef2.current);
      }
      if (videoRef3.current) {
        observer3.unobserve(videoRef3.current);
      }
    };
  }, []);

  return (
    <ProjectsContainer id="projects">
      <SectionDescription>
        <Heading>Projects</Heading>
        <p>What I'm currently noodling on</p>
      </SectionDescription>
      <GridContainer>
        <div>
          <Video ref={videoRef1} loop muted>
            <source
              src="/videos/ip-address-tracker-video.mp4"
              type="video/mp4"
            />
          </Video>
          <VideoDescriptionContainer>
            <Tag bgColor="#3178C6" color="white">
              TypeScript
            </Tag>
            <Tag bgColor="#ffeb3b" color="#000">
              React
            </Tag>
            <p>
              IP Address Tracker that displays location data of a given IP
              address
            </p>
          </VideoDescriptionContainer>
        </div>
        <Project2>
          <SecondVideo ref={videoRef2} loop muted>
            <source
              src="/videos/fast-react-pizza-recording.mp4"
              type="video/mp4"
            />
          </SecondVideo>
          <VideoDescriptionContainer>
            <Tag bgColor="#3178C6" color="white">
              React
            </Tag>
            <Tag bgColor="#ffeb3b" color="#000">
              Tailwind CSS
            </Tag>
            <p>Mock Pizza Ordering App</p>
          </VideoDescriptionContainer>
        </Project2>
        <Project3>
          <ThirdVideo ref={videoRef3} loop muted>
            <source
              src="/videos/todo-list-nextjs-recording.mp4"
              type="video/mp4"
            />
          </ThirdVideo>
          <VideoDescriptionContainer>
            <Tag bgColor="#3178C6" color="white">
              NextJS
            </Tag>
            <Tag bgColor="#ffeb3b" color="#000">
              Prisma
            </Tag>
            <p>Simple Todo List while learning NextJS</p>
          </VideoDescriptionContainer>
        </Project3>
      </GridContainer>
    </ProjectsContainer>
  );
}

export default Projects;
