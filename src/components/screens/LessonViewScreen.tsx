import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { LessonContent } from "../lesson/LessonContent";
import { allCourses } from "../../data/courses";
import { useCourseProgress } from "../../hooks/useCourseProgress";

type LessonViewScreenProps = {
    route: RouteProp<MainStackParamList, "LessonView">;
    navigation: FrameNavigationProp<MainStackParamList, "LessonView">;
};

export function LessonViewScreen({ route, navigation }: LessonViewScreenProps) {
    const course = allCourses.find((c) => c.id === route.params.courseId);
    const lesson = course?.lessons.find((l) => l.id === route.params.lessonId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: lesson?.title || "Lesson"
        });
    }, [navigation, lesson]);

    const { updateLessonProgress } = useCourseProgress(course!);

    if (!course || !lesson) {
        return (
            <gridLayout className="w-full h-full items-center justify-center">
                <label text="Lesson not found" />
            </gridLayout>
        );
    }

    const handleComplete = () => {
        updateLessonProgress(lesson.id, true);
        navigation.goBack();
    };

    return (
        <gridLayout rows="*" className="w-full h-full">
            <LessonContent
                lesson={lesson}
                onComplete={handleComplete}
            />
        </gridLayout>
    );
}