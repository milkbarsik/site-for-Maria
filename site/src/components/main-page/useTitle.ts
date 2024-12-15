import { create } from "zustand";

type TuseTitle = {
	title: string;
	setTitle: (value: string) => void;
}

export const useTitle = create<TuseTitle>((set) => ({
	title: 'Титульная страница',

	setTitle: (value: string) =>
		set(() => ({title: value}))
}))