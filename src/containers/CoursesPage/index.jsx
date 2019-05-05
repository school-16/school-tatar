import React from "react";
import CoursesPage from "../../components/CoursesPage";

export const courses = [
  {
    cover:
      "https://www.codecademy.com/webpack/4da8bd76d8afcd973e7b913bb6b3d93b.svg",
    title: "Web development",
    color: "#49a9f8"
  }
]

class CoursesPageContainer extends React.Component {
  state = {
    courses
  };

  render() {
    const { courses } = this.state;

    return <CoursesPage courses={courses} />;
  }
}

export default CoursesPageContainer;
