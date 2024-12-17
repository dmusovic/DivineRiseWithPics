import * as React from "react";
import { Course } from "../../types";
import { CourseHeader } from "./CourseHeader";
import { CourseStats } from "./CourseStats";

interface CourseOverviewProps {
    course: Course;
}

export function CourseOverview({ course }: CourseOverviewProps) {
    return (
        <stackLayout className="bg-white mb-4">
            <CourseHeader
                title={course.title}
                description={course.description}
                thumbnail={course.thumbnail}
            />
            <CourseStats
                totalLessons={course.lessons.length}
                completedLessons={course.lessons.filter(l => l.completed).length}
                totalDuration={course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0)}
            />
        </stackLayout>
    );
}