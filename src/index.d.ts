declare interface Survivor {
	id: number
	name: string
	image: string
	age: number
	infected : boolean
	city: string
	background: string
	killCount: number
}

declare type SurvivorSummary = Omit<Survivor, 'background' | 'killCount'>