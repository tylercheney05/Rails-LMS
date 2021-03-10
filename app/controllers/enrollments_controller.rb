class EnrollmentsController < ApplicationController
  before_action :set_course 
  def index
    # @enrollments = @course.enrollments
    # render component: "Enrollments", props: { course: @course, enrollments: @enrollments }
    @teachers = @course.enrollments.where(role: 'teacher')
    @tas = @course.enrollments.where(role: 'ta')
    @students = @course.enrollments.where(role: 'student')
    render component: "Enrollments", props: { 
      course: @course, teachers: @teachers, tas: @tas, students: @students, users: User.all
    }
  end
  def new
    @enrollment = @course.enrollments.new 
    @users = User.all - @course.users
    render component: "EnrollmentNew", props: { course: @course, enrollment: @enrollment, users: @users }
  end
  def create 
    @enrollment = @course.enrollments.new(enrollment_params)
    if @enrollment.save
      redirect_to course_enrollments_path(@course)
    else
      @users = User.all - @course.users
      render component: "EnrollmentNew", props: { course: @course, enrollment: @enrollment, users: @users }
    end
  end
  def destroy
    @enrollment = @course.enrollments.find(params[:id])
    @enrollment.destroy
    redirect_to course_enrollments_path(@course)
  end
  private 
    def set_course
      @course = Course.find(params[:course_id])
    end
    def enrollment_params
      params.require(:enrollment).permit(:role, :user_id)
    end
end