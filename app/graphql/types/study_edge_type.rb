module Types
  class StudyEdgeType < BaseObject
    description "Study decorated with navigation cursors"

    field :prevId, String, "Id of a previous study", null: true
    field :nextId, String, "Id of a next study", null: true
    field :studyIndex, Int, "Index of this study in the search", null: true
    field :studyCount, Int, "Total # of search results", null: true
    field :isWorkflow, Boolean, "Study is in a workflow mode", null: false
    field :study, StudyType, "Study", null: false
  end
end
