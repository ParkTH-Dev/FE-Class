import ClientComponent from "@/app/components/client-component";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const { q } = searchParams;
  return (
    <div>
      Search Page : {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
