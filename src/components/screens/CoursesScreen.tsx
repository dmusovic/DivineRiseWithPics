import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { CourseSection } from "../course/CourseSection";
import { allCourses } from "../../data/courses";
import { categorizedCourses, COURSE_CATEGORIES } from "../../utils/courseUtils";
import { Course } from "../../types";

type CoursesScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Courses">;
};

export function CoursesScreen({ navigation }: CoursesScreenProps) {
    const categorized = categorizedCourses(allCourses);
    
    const handleCourseSelect = React.useCallback((course: Course) => {
        navigation.navigate("CourseDetails", {
            courseId: course.id,
        });
    }, [navigation]);

    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="pt-4">
                {COURSE_CATEGORIES.map(category => (
                    <CourseSection
                        key={category.id}
                        title={category.title}
                        courses={categorized[category.id]}
                        onSelectCourse={handleCourseSelect}
                    />
                ))}
            </stackLayout>
        </scrollView>
    );
}