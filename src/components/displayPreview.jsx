import { DisplayBasicInfo } from './displaybasicInfo';

export function DisplayPreview({ personInfo }) {
  return (
    <section className="preview">
      <DisplayBasicInfo {...personInfo} />
    </section>
  );
}
