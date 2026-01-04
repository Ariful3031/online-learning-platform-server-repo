import React from 'react'
import SkeletonCourseCard from './SkeletonCourseCard'

export default function Skeletion() {
    return (
        <div className="w-11/12 mx-auto">

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

                {
                [...Array(8)].map((_, i) =>
                    <SkeletonCourseCard key={i} />
                )
                }

            </div>
        </div>
    )
}
