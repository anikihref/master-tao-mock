const deleteFormImg = document.querySelector('.form-step__delete-image-btn');
const imgState = document.querySelector('.form-step__image-state');
const imgInput = document.querySelector('.form-step__image-input');

const formSteps = [...document.querySelectorAll('.form-step')];
const form = document.querySelector('.form');
const TRANSITION_DURATION = 300;

const burger = document.querySelector('.navbar__burger');
const burgerContent = document.querySelector('.navbar__burger-content');

function clearImgInputValue() {
  imgState.textContent = 'Добавьте фотографию';
  imgState.classList.remove('active');
  imgInput.value = '';
}

function burgerListener() {
  burgerContent.classList.toggle('active');
  document.body.classList.toggle('non-scrollable');
}

function removeAnimationClasses(currentStep) {
  formSteps.forEach((step) => {
    if (step !== currentStep) {
      step.classList.remove(
        'fade-in-next',
        'fade-in-prev',
        'fade-prev',
        'fade-next',
      );
    }
  });
}

form.addEventListener('click', (e) => {
  const { target } = e;
  const nextBtn = target.closest('.form-step__next-btn');
  const prevBtn = target.closest('.form-step__prev-btn');

  if (!nextBtn && !prevBtn) return;
  e.preventDefault();

  const currentStep = target.closest('.form-step');
  removeAnimationClasses(currentStep);

  if (nextBtn) {
    const inputs = [...currentStep.querySelectorAll('input')];

    if (inputs.every((input) => input.reportValidity())) {
      const nextStep = formSteps[+currentStep.dataset.stepNum + 1];

      removeAnimationClasses(nextStep);

      currentStep.classList.add('fade-next');
      setTimeout(() => {
        currentStep.classList.add('hide');
        nextStep.classList.remove('hide');
        nextStep.classList.add('fade-in-next');
      }, TRANSITION_DURATION);
    }
  } else if (prevBtn) {
    const prevStep = formSteps[+currentStep.dataset.stepNum - 1];

    removeAnimationClasses(prevStep);

    currentStep.classList.add('fade-prev');
    setTimeout(() => {
      currentStep.classList.add('hide');
      prevStep.classList.remove('hide');
      prevStep.classList.add('fade-in-prev');
    }, TRANSITION_DURATION);
  }

  removeAnimationClasses(currentStep);
});

imgInput.addEventListener('change', (e) => {
  imgState.textContent = 'Фотография добавлена';
  imgState.classList.add('active');

  if (!e.target.value) {
    clearImgInputValue();
  }
});

burger.addEventListener('click', burgerListener);

deleteFormImg.addEventListener('click', clearImgInputValue);
