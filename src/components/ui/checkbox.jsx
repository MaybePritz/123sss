import classNames from "classnames";
import { useEffect } from "react";
export default function Checkbox({ title, classes, checked, Action, disabled}) {
    useEffect(() =>{
        const input = document.querySelector('input');
        input.checked = !checked;
        input.disabled = disabled;
    });

    return (
        <div className={classNames(classes)}>
            <h6 class="mb-0">{title}</h6>
            <div class="min-h-6 mb-0.5 block pl-0">
              <input
                onChange={Action}
                class="disabled:opacity-50 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                type="checkbox"
              />
            </div>
          </div>
    );
}