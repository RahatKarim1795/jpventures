const CONTACT_SECTION_ID = 'contact';

export function scrollToContactSection(): boolean {
  if (typeof document === 'undefined') return false;

  const contactSection = document.getElementById(CONTACT_SECTION_ID);
  if (!contactSection) return false;

  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const firstFormField = contactSection.querySelector<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >('input, textarea, select');

  if (firstFormField) {
    firstFormField.focus({ preventScroll: true });
  } else {
    contactSection.focus({ preventScroll: true });
  }

  if (typeof window !== 'undefined' && window.location.hash !== `#${CONTACT_SECTION_ID}`) {
    const nextUrl = `${window.location.pathname}${window.location.search}#${CONTACT_SECTION_ID}`;
    window.history.replaceState(window.history.state, '', nextUrl);
  }

  return true;
}
