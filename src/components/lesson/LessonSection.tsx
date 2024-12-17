import * as React from "react";
import { Lesson } from "../../types";
import { LessonList } from "./LessonList";

interface LessonSectionProps {
    lessons: Lesson[];
    onLessonSelect: (lessonId: string) => void;
}

export function LessonSection({ lessons, onLessonSelect }: LessonSectionProps) {
    return (
        <stackLayout className="p-4">
            <label className="text-xl font-semibold mb-4 text-gray-800" text="Course Content" />
            <LessonList
                lessons={lessons}
                onSelectLesson={(lesson) => onLessonSelect(lesson.id)}
            />
        </stackLayout>
    );
}