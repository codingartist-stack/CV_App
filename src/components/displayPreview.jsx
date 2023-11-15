import { DisplayBasicInfo } from './displaybasicInfo';

export function DisplayPreview({ personInfo }) {
  return (
    <main className="preview">
      <DisplayBasicInfo {...personInfo} />
    </main>
  );
}
