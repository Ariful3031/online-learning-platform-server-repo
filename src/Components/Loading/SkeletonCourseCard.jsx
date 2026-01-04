const SkeletonCourseCard = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      {/* Image */}
      <div className="skeleton h-48 w-full rounded-t-xl"></div>

      <div className="card-body space-y-3">
        {/* Title */}
        <div className="skeleton h-5 w-3/4"></div>

        {/* Description */}
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>

        {/* Meta */}
        <div className="skeleton h-4 w-1/2"></div>

        {/* Button */}
        <div className="skeleton h-10 w-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonCourseCard;
