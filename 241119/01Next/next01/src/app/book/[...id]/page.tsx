const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <div>Book / {id} page 입니다.</div>;
};

export default Page;
