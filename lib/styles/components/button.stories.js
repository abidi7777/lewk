/* eslint-disable no-restricted-syntax */

export default {
  title: 'Button',
};

const rightArrow = `
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
`;

const createButtonVariants = (btnProps) => {
  const btnWrapper = document.createElement('div');
  const btn = document.createElement('button');
  const circleBtn = document.createElement('button');
  btnWrapper.className = 'flex gap-5';
  circleBtn.innerHTML = rightArrow;

  for (const [key, value] of Object.entries(btnProps)) {
    if (key === 'innerHTML' || key === 'innerText') {
      btn[key] = value;
    } else {
      btn.setAttribute(key, value);
      circleBtn.setAttribute(key, value);
    }
  }

  circleBtn.classList.add('circle');
  circleBtn.classList.add('w-12');
  circleBtn.classList.add('h-12');
  btnWrapper.appendChild(btn);
  btnWrapper.appendChild(circleBtn);

  return btnWrapper;
};

export const Primary = () => createButtonVariants({
  innerHTML: `Primary ${rightArrow}`,
  class: 'btn btn-primary',
});

export const DangerLight = () => createButtonVariants({
  innerHTML: `Danger Light ${rightArrow}`,
  class: 'btn btn-danger-light',
});

export const DangerDark = () => createButtonVariants({
  innerHTML: `Danger Dark ${rightArrow}`,
  class: 'btn btn-danger-dark',
});

export const WarnLight = () => createButtonVariants({
  innerHTML: `Warn Light ${rightArrow}`,
  class: 'btn btn-warn-light',
});

export const WarnDark = () => createButtonVariants({
  innerHTML: `Warn Dark ${rightArrow}`,
  class: 'btn btn-warn-dark',
});

export const SuccessLight = () => createButtonVariants({
  innerHTML: `Success Light ${rightArrow}`,
  class: 'btn btn-success-light',
});

export const SuccessDark = () => createButtonVariants({
  innerHTML: `Success Dark ${rightArrow}`,
  class: 'btn btn-success-dark',
});

export const InfoLight = () => createButtonVariants({
  innerHTML: `Info Light ${rightArrow}`,
  class: 'btn btn-info-light',
});

export const InfoDark = () => createButtonVariants({
  innerHTML: `Info Dark ${rightArrow}`,
  class: 'btn btn-info-dark',
});

export const Disabled = () => createButtonVariants({
  innerHTML: `Disabled ${rightArrow}`,
  class: 'btn btn-primary',
  disabled: 'disabled',
});

export const PrimaryLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-primary loading',
});

export const DangerLightLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-danger-light loading',
});

export const DangerDarkLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-danger-dark loading',
});

export const WarnLightLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-warn-light loading',
});

export const WarnDarkLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-warn-dark loading',
});

export const SuccessLightLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-success-light loading',
});

export const SuccessDarkLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-success-dark loading',
});

export const InfoLightLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-info-light loading',
});

export const InfoDarkLoading = () => createButtonVariants({
  innerHTML: `Loading ${rightArrow}`,
  class: 'btn btn-info-dark loading',
});
