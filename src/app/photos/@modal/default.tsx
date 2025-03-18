// default tsx is mandatory to add under the slot, incase when this parallel route is active, nextjs will render 404, not found
// to overcome this we have to render the default.tsx as null, if no data need to be rendered.
export default function DefaultModalPage() {
  return null;
}
