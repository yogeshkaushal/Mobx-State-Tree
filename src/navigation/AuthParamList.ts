import { StackNavigationProp } from "@react-navigation/stack"

export type AuthParamList = {
    Dashboard: undefined,
    NotesDetailScreen: undefined
}

export type AuthNavProps<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, T>;
}