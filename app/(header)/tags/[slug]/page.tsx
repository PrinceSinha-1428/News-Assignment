import Hero from "@/components/Hero";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


const page = async ({ params }: PageProps) => {
   const {slug } = await params;
  return (
    <div className="flex p-10 flex-col font-bold items-center justify-center  text-red-700">
      <h1 className="text-4xl">
        {slug.toUpperCase()}
      </h1>
      <h1 className="mt-10 text-2xl font-semibold">News Coming Soon.....</h1>
    </div>
  );
}

export default page;



