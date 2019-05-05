
import React from 'react';
import CoursePage from '../../components/CoursePage';
import { courses } from '../CoursesPage';

const CoursePageContainer = () => (<CoursePage {...courses[0]} />)

export default CoursePageContainer;