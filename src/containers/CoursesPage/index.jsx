import React from "react";
import CoursesPage from "../../components/CoursesPage";

class CoursesPageContainer extends React.Component {
  state = { courses: [] };

  render() {
    const { courses } = this.state;

    return <CoursesPage courses={courses} />;
  }
}

export default CoursesPageContainer;
