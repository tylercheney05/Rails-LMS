class EnrollmentsController < ApplicationController
  before_action :set_course
  def index
    @enrollments = @course.enrollments
    render component: "Enrollment", props: { course: @course, enrollments: @enrollments }
  end

  def new
  end

  private
    def set_course
      @course = Course.find(params[:course_id])
    end
end
