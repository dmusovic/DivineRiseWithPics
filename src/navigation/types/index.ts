export type RootStackParamList = {
    MainStack: undefined;
};

export type CourseStackParamList = {
    Courses: undefined;
    CourseDetails: {
        courseId: string;
    };
    LessonView: {
        courseId: string;
        lessonId: string;
    };
};