class Candidate < ApplicationRecord
  belongs_to :user
  belongs_to :job

  has_one :avatar, through: :user, class_name: Image.name

  enum interested_in: [:have_a_chat, :work_together, :opportunity]
  enum process: [:apply, :fail_test, :joined, :pass_test, :wait_test]

  validates :user_id, presence: true
  validates :job_id, presence: true
  validates :interested_in, presence: true
  validates :process, presence: true

  delegate :title, to: :job, prefix: true
  delegate :email, :name, to: :user, prefix: true

  scope :in_jobs, ->job_ids{where job_id: job_ids}

  scope :filter, ->(list_filter, sort_by, type) do
    where("#{type} IN (?)", list_filter).order "#{type} #{sort_by}"
  end
end
