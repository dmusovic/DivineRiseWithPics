import * as React from "react";
import { Course } from "../../types";
import { CourseOverview } from "./CourseOverview";
import { LessonSection } from "../lesson/LessonSection";

interface CourseDetailsProps {
    course: Course;
    onLessonSelect: (lessonId: string) => void;
}

export function CourseDetails({ course, onLessonSelect }: CourseDetailsProps) {
    return (
        <scrollView className="bg-gray-100">
            <stackLayout>
                {/* Course Overview Section */}
                <CourseOverview course={course} />
                
                {/* Lessons Section */}
                <LessonSection
                    lessons={course.lessons}
                    onLessonSelect={onLessonSelect}
                />
            </stackLayout>
        </scrollView>
    );
}