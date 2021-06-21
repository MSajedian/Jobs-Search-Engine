import { Component } from "react";
// import JobDetail from "./JobDetail";
import { Container, Col, Row, Card } from "react-bootstrap";

class JobList extends Component {
  state = {
    jobs: [],
    jobSelected: null,
    jobCount: null,
  };

  componentDidMount = async () => {
    try {
      let resp = await fetch(
        `https://remotive.io/api/remote-jobs?search=${this.props.queryTitle}&company_name=${this.props.queryCompany}`
      );
      if (resp.ok) {
        let response = await resp.json();
        let jobs = response.jobs;
        let jobCount = response["job-count"];
        console.log('jobs:', jobs)
        this.setState({ jobs });
        this.setState({ jobCount });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.queryTitle !== this.props.queryTitle || prevProps.queryCompany !== this.props.queryCompany) {
      this.componentDidMount()
    }
    // if () {
    //   this.componentDidMount()
    // }
  }

  changeJob = (job) => {
    this.setState({ jobSelected: job })
    this.props.history.push("/company-detail")
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            Number of Results: {this.state.jobCount}
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              {this.state.jobs.map((job) => (
                <Card
                  className={this.state.jobSelected?.id === job.id ? "border-thick mt-3" : "mt-3"}
                  onClick={() => this.changeJob(job)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body className="d-flex">
                    {/* <img className="job-image" src={job.url} alt="job cover" /> */}
                    <div>
                      <Card.Text className="font-weight-bold">{job.title}</Card.Text>
                      <Card.Text className="font-weight-bold">{job.company_name}</Card.Text>
                      <p>{job.category}</p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default JobList;

// <Job
//   key={job.id}
//   job={job}
//   changeJob={changeJob}
//   jobSelected={jobSelected}
// />

// {/* <JobList
//             jobSelected={this.state.jobSelected}
//             changeJob={this.changeJob}
//             jobs={this.state.jobs}
//           /> */}

// {/* <Col md={8}>
//           <JobDetail
//             jobSelected={this.state.jobSelected}
//             addToCart={this.props.addToCart} // prop drilling
//           />
//         </Col> */}


// import Job from "./Job";

// const JobList = ({ jobs, changeJob, jobSelected }) => (
//   <div>
//     {jobs.map((job) => (
//       <Job
//         key={job.id}
//         job={job}
//         changeJob={changeJob}
//         jobSelected={jobSelected}
//       />
//     ))}
//   </div>
// );

// export default JobList;
