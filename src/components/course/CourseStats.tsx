import * as React from "react";
import { formatDuration } from "../../utils/formatUtils";

interface CourseStatsProps {
    totalLessons: number;
    completedLessons: number;
    totalDuration: number;
}

export function CourseStats({ totalLessons, completedLessons, totalDuration }: CourseStatsProps) {
    return (
        <gridLayout columns="*, *, *" className="p-4 border-t border-gray-200">
            <stackLayout col={0} className="text-center">
                <label className="text-lg font-bold text-gray-800" text={totalLessons.toString()} />
                <label className="text-sm text-gray-600" text="Lessons" />
            </stackLayout>
            
            <stackLayout col={1} className="text-center">
                <label className="text-lg font-bold text-gray-800" text={completedLessons.toString()} />
                <label className="text-sm text-gray-600" text="Completed" />
            </stackLayout>
            
            <stackLayout col={2} className="text-center">
                <label className="text-lg font-bold text-gray-800" text={formatDuration(totalDuration)} />
                <label className="text-sm text-gray-600" text="Duration" />
            </stackLayout>
        </gridLayout>
    );
}