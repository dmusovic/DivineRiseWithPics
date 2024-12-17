import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { CourseDetails } from "../course/CourseDetails";
import { allCourses } from "../../data/courses";

type CourseDetailsScreenProps = {
    route: RouteProp<MainStackParamList, "CourseDetails">;
    navigation: FrameNavigationProp<MainStackParamList, "CourseDetails">;
};

export function CourseDetailsScreen({ route, navigation }: CourseDetailsScreenProps) {
    const courseId = route.params.courseId;
    const course = allCourses.find((c) => c.id === courseId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: course?.title || "Course Details"
        });
    }, [navigation, course]);

    if (!course) {
        return (
            <gridLayout className="w-full h-full items-center justify-center">
                <label text={`Course not found: ${courseId}`} />
            </gridLayout>
        );
    }

    const handleLessonSelect = (lessonId: string) => {
        navigation.navigate("LessonView", {
            courseId: course.id,
            lessonId: lessonId,
        });
    };

    return <CourseDetails course={course} onLessonSelect={handleLessonSelect} />;
}