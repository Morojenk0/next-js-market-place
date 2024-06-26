import DemoContent from "@/app/components/DemoContent"
import Post from "@/app/models/Post"
import { Types } from "mongoose"
import Image from "next/image"
import { Suspense } from "react"

export async function generateStaticParams() {
  const data = (await Post.find()) as Post[]
  return data.map((post: Post) => {
    id: post._id
  })
}
export async function generateMetadata({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = (await Post.findById(params.id)) as Post
  return {
    title: `Sheen | ${data.title}`,
    description: `This page has ${data._id} ID`,
  }
}
export default async function PostPage({
  params,
}: {
  params: { id: Types.ObjectId }
}) {
  const data = (await Post.findById(params.id)) as Post
  return (
    <section>
      <Suspense
        fallback={<h2 className="text-[4rem]/[4rem]">Post is loading...</h2>}
      >
        <article className="lg:mx-[5rem] desktop:mx-[10rem]">
          <hgroup className="mt-[1.5rem] flex flex-row gap-x-[1.4rem] uppercase">
            <h2 className="capitalize">{data.title}</h2>
            <p>
              <time dateTime={`${data.date}`}>
                {new Date(data.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            <span className="text-gray-light">/</span>
            <p className="accent-underline">{data.categories}</p>
          </hgroup>
          <Image
            className="mt-[1.5rem] lg:mt-[3rem] w-full max-h-[10rem] sm:max-h-[20.25rem] desktop:max-h-[31.25rem]"
            src={data.img.src}
            width={data.img.width}
            height={data.img.height}
            alt={data.img.alt}
            priority={true}
          />
        </article>
      </Suspense>
      <div className="mt-[2.5rem] lg:mt-[4rem]">
        <DemoContent />
      </div>
    </section>
  )
}
