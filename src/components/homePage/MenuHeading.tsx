import { MenuTitle, SortPanel } from ".";

export default function MenuHeading() {
	return (
		<div className="flex justify-between items-center gap-2 p-5 pt-9 max-sm:p-3 max-sm:pt-6 max-xsm:flex-col">
			<MenuTitle />
			<SortPanel />
		</div>
	);
}