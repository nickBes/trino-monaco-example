// Generated from ./TrinoSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TableNameContext } from "./TrinoSQLParser";
import { SubqueryRelationContext } from "./TrinoSQLParser";
import { UnnestContext } from "./TrinoSQLParser";
import { LateralContext } from "./TrinoSQLParser";
import { TableFunctionInvocationContext } from "./TrinoSQLParser";
import { ParenthesizedRelationContext } from "./TrinoSQLParser";
import { JsonTableContext } from "./TrinoSQLParser";
import { RowTypeContext } from "./TrinoSQLParser";
import { IntervalTypeContext } from "./TrinoSQLParser";
import { DateTimeTypeContext } from "./TrinoSQLParser";
import { DoublePrecisionTypeContext } from "./TrinoSQLParser";
import { LegacyArrayTypeContext } from "./TrinoSQLParser";
import { LegacyMapTypeContext } from "./TrinoSQLParser";
import { ArrayTypeContext } from "./TrinoSQLParser";
import { GenericTypeContext } from "./TrinoSQLParser";
import { JoinRelationContext } from "./TrinoSQLParser";
import { RelationDefaultContext } from "./TrinoSQLParser";
import { ComparisonContext } from "./TrinoSQLParser";
import { QuantifiedComparisonContext } from "./TrinoSQLParser";
import { BetweenContext } from "./TrinoSQLParser";
import { InListContext } from "./TrinoSQLParser";
import { InSubqueryContext } from "./TrinoSQLParser";
import { LikeContext } from "./TrinoSQLParser";
import { NullPredicateContext } from "./TrinoSQLParser";
import { DistinctFromContext } from "./TrinoSQLParser";
import { DecimalLiteralContext } from "./TrinoSQLParser";
import { DoubleLiteralContext } from "./TrinoSQLParser";
import { IntegerLiteralContext } from "./TrinoSQLParser";
import { QueryTermDefaultContext } from "./TrinoSQLParser";
import { SetOperationContext } from "./TrinoSQLParser";
import { UnquotedIdentifierContext } from "./TrinoSQLParser";
import { QuotedIdentifierContext } from "./TrinoSQLParser";
import { BackQuotedIdentifierContext } from "./TrinoSQLParser";
import { DigitIdentifierContext } from "./TrinoSQLParser";
import { PatternVariableContext } from "./TrinoSQLParser";
import { EmptyPatternContext } from "./TrinoSQLParser";
import { PatternPermutationContext } from "./TrinoSQLParser";
import { GroupedPatternContext } from "./TrinoSQLParser";
import { PartitionStartAnchorContext } from "./TrinoSQLParser";
import { PartitionEndAnchorContext } from "./TrinoSQLParser";
import { ExcludedPatternContext } from "./TrinoSQLParser";
import { DefaultPropertyValueContext } from "./TrinoSQLParser";
import { NonDefaultPropertyValueContext } from "./TrinoSQLParser";
import { ExplainFormatContext } from "./TrinoSQLParser";
import { ExplainTypeContext } from "./TrinoSQLParser";
import { SingleGroupingSetContext } from "./TrinoSQLParser";
import { RollupContext } from "./TrinoSQLParser";
import { CubeContext } from "./TrinoSQLParser";
import { MultipleGroupingSetsContext } from "./TrinoSQLParser";
import { ReturnStatementContext } from "./TrinoSQLParser";
import { AssignmentStatementContext } from "./TrinoSQLParser";
import { SimpleCaseStatementContext } from "./TrinoSQLParser";
import { SearchedCaseStatementContext } from "./TrinoSQLParser";
import { IfStatementContext } from "./TrinoSQLParser";
import { IterateStatementContext } from "./TrinoSQLParser";
import { LeaveStatementContext } from "./TrinoSQLParser";
import { CompoundStatementContext } from "./TrinoSQLParser";
import { LoopStatementContext } from "./TrinoSQLParser";
import { WhileStatementContext } from "./TrinoSQLParser";
import { RepeatStatementContext } from "./TrinoSQLParser";
import { LanguageCharacteristicContext } from "./TrinoSQLParser";
import { DeterministicCharacteristicContext } from "./TrinoSQLParser";
import { ReturnsNullOnNullInputCharacteristicContext } from "./TrinoSQLParser";
import { CalledOnNullInputCharacteristicContext } from "./TrinoSQLParser";
import { SecurityCharacteristicContext } from "./TrinoSQLParser";
import { CommentCharacteristicContext } from "./TrinoSQLParser";
import { ValueExpressionDefaultContext } from "./TrinoSQLParser";
import { AtTimeZoneContext } from "./TrinoSQLParser";
import { ArithmeticUnaryContext } from "./TrinoSQLParser";
import { ArithmeticBinaryContext } from "./TrinoSQLParser";
import { ConcatenationContext } from "./TrinoSQLParser";
import { TableArgumentTableContext } from "./TrinoSQLParser";
import { TableArgumentQueryContext } from "./TrinoSQLParser";
import { QuantifiedPrimaryContext } from "./TrinoSQLParser";
import { PatternConcatenationContext } from "./TrinoSQLParser";
import { PatternAlternationContext } from "./TrinoSQLParser";
import { SpecifiedPrincipalContext } from "./TrinoSQLParser";
import { CurrentUserGrantorContext } from "./TrinoSQLParser";
import { CurrentRoleGrantorContext } from "./TrinoSQLParser";
import { UnboundedFrameContext } from "./TrinoSQLParser";
import { CurrentRowBoundContext } from "./TrinoSQLParser";
import { BoundedFrameContext } from "./TrinoSQLParser";
import { QueryPrimaryDefaultContext } from "./TrinoSQLParser";
import { TableContext } from "./TrinoSQLParser";
import { InlineTableContext } from "./TrinoSQLParser";
import { SubqueryContext } from "./TrinoSQLParser";
import { NullLiteralContext } from "./TrinoSQLParser";
import { IntervalLiteralContext } from "./TrinoSQLParser";
import { TypeConstructorContext } from "./TrinoSQLParser";
import { NumericLiteralContext } from "./TrinoSQLParser";
import { BooleanLiteralContext } from "./TrinoSQLParser";
import { StringLiteralContext } from "./TrinoSQLParser";
import { BinaryLiteralContext } from "./TrinoSQLParser";
import { ParameterContext } from "./TrinoSQLParser";
import { PositionContext } from "./TrinoSQLParser";
import { RowConstructorContext } from "./TrinoSQLParser";
import { ListaggContext } from "./TrinoSQLParser";
import { FunctionCallContext } from "./TrinoSQLParser";
import { MeasureContext } from "./TrinoSQLParser";
import { LambdaContext } from "./TrinoSQLParser";
import { SubqueryExpressionContext } from "./TrinoSQLParser";
import { ExistsContext } from "./TrinoSQLParser";
import { SimpleCaseContext } from "./TrinoSQLParser";
import { SearchedCaseContext } from "./TrinoSQLParser";
import { CastContext } from "./TrinoSQLParser";
import { ArrayConstructorContext } from "./TrinoSQLParser";
import { SubscriptContext } from "./TrinoSQLParser";
import { ColumnReferenceContext } from "./TrinoSQLParser";
import { DereferenceContext } from "./TrinoSQLParser";
import { CurrentDateContext } from "./TrinoSQLParser";
import { CurrentTimeContext } from "./TrinoSQLParser";
import { CurrentTimestampContext } from "./TrinoSQLParser";
import { LocalTimeContext } from "./TrinoSQLParser";
import { LocalTimestampContext } from "./TrinoSQLParser";
import { CurrentUserContext } from "./TrinoSQLParser";
import { CurrentCatalogContext } from "./TrinoSQLParser";
import { CurrentSchemaContext } from "./TrinoSQLParser";
import { CurrentPathContext } from "./TrinoSQLParser";
import { TrimContext } from "./TrinoSQLParser";
import { SubstringContext } from "./TrinoSQLParser";
import { NormalizeContext } from "./TrinoSQLParser";
import { ExtractContext } from "./TrinoSQLParser";
import { ParenthesizedExpressionContext } from "./TrinoSQLParser";
import { GroupingOperationContext } from "./TrinoSQLParser";
import { JsonExistsContext } from "./TrinoSQLParser";
import { JsonValueContext } from "./TrinoSQLParser";
import { JsonQueryContext } from "./TrinoSQLParser";
import { JsonObjectContext } from "./TrinoSQLParser";
import { JsonArrayContext } from "./TrinoSQLParser";
import { SelectSingleContext } from "./TrinoSQLParser";
import { SelectAllContext } from "./TrinoSQLParser";
import { QualifiedArgumentContext } from "./TrinoSQLParser";
import { UnqualifiedArgumentContext } from "./TrinoSQLParser";
import { PositionalArgumentContext } from "./TrinoSQLParser";
import { NamedArgumentContext } from "./TrinoSQLParser";
import { MergeUpdateContext } from "./TrinoSQLParser";
import { MergeDeleteContext } from "./TrinoSQLParser";
import { MergeInsertContext } from "./TrinoSQLParser";
import { OrdinalityColumnContext } from "./TrinoSQLParser";
import { ValueColumnContext } from "./TrinoSQLParser";
import { QueryColumnContext } from "./TrinoSQLParser";
import { NestedColumnsContext } from "./TrinoSQLParser";
import { ZeroOrMoreQuantifierContext } from "./TrinoSQLParser";
import { OneOrMoreQuantifierContext } from "./TrinoSQLParser";
import { ZeroOrOneQuantifierContext } from "./TrinoSQLParser";
import { RangeQuantifierContext } from "./TrinoSQLParser";
import { IdentifierUserContext } from "./TrinoSQLParser";
import { StringUserContext } from "./TrinoSQLParser";
import { LeafPlanContext } from "./TrinoSQLParser";
import { JoinPlanContext } from "./TrinoSQLParser";
import { UnionPlanContext } from "./TrinoSQLParser";
import { CrossPlanContext } from "./TrinoSQLParser";
import { ReadUncommittedContext } from "./TrinoSQLParser";
import { ReadCommittedContext } from "./TrinoSQLParser";
import { RepeatableReadContext } from "./TrinoSQLParser";
import { SerializableContext } from "./TrinoSQLParser";
import { BasicStringLiteralContext } from "./TrinoSQLParser";
import { UnicodeStringLiteralContext } from "./TrinoSQLParser";
import { UnspecifiedPrincipalContext } from "./TrinoSQLParser";
import { UserPrincipalContext } from "./TrinoSQLParser";
import { RolePrincipalContext } from "./TrinoSQLParser";
import { StatementDefaultContext } from "./TrinoSQLParser";
import { UseContext } from "./TrinoSQLParser";
import { CreateCatalogContext } from "./TrinoSQLParser";
import { DropCatalogContext } from "./TrinoSQLParser";
import { CreateSchemaContext } from "./TrinoSQLParser";
import { DropSchemaContext } from "./TrinoSQLParser";
import { RenameSchemaContext } from "./TrinoSQLParser";
import { SetSchemaAuthorizationContext } from "./TrinoSQLParser";
import { CreateTableAsSelectContext } from "./TrinoSQLParser";
import { CreateTableContext } from "./TrinoSQLParser";
import { DropTableContext } from "./TrinoSQLParser";
import { InsertIntoContext } from "./TrinoSQLParser";
import { DeleteContext } from "./TrinoSQLParser";
import { TruncateTableContext } from "./TrinoSQLParser";
import { CommentTableContext } from "./TrinoSQLParser";
import { CommentViewContext } from "./TrinoSQLParser";
import { CommentColumnContext } from "./TrinoSQLParser";
import { RenameTableContext } from "./TrinoSQLParser";
import { AddColumnContext } from "./TrinoSQLParser";
import { RenameColumnContext } from "./TrinoSQLParser";
import { DropColumnContext } from "./TrinoSQLParser";
import { SetColumnTypeContext } from "./TrinoSQLParser";
import { DropNotNullConstraintContext } from "./TrinoSQLParser";
import { SetTableAuthorizationContext } from "./TrinoSQLParser";
import { SetTablePropertiesContext } from "./TrinoSQLParser";
import { TableExecuteContext } from "./TrinoSQLParser";
import { AnalyzeContext } from "./TrinoSQLParser";
import { CreateMaterializedViewContext } from "./TrinoSQLParser";
import { CreateViewContext } from "./TrinoSQLParser";
import { RefreshMaterializedViewContext } from "./TrinoSQLParser";
import { DropMaterializedViewContext } from "./TrinoSQLParser";
import { RenameMaterializedViewContext } from "./TrinoSQLParser";
import { SetMaterializedViewPropertiesContext } from "./TrinoSQLParser";
import { DropViewContext } from "./TrinoSQLParser";
import { RenameViewContext } from "./TrinoSQLParser";
import { SetViewAuthorizationContext } from "./TrinoSQLParser";
import { CallContext } from "./TrinoSQLParser";
import { CreateFunctionContext } from "./TrinoSQLParser";
import { DropFunctionContext } from "./TrinoSQLParser";
import { CreateRoleContext } from "./TrinoSQLParser";
import { DropRoleContext } from "./TrinoSQLParser";
import { GrantRolesContext } from "./TrinoSQLParser";
import { GrantPrivilegesContext } from "./TrinoSQLParser";
import { RevokeRolesContext } from "./TrinoSQLParser";
import { RevokePrivilegesContext } from "./TrinoSQLParser";
import { DenyContext } from "./TrinoSQLParser";
import { SetRoleContext } from "./TrinoSQLParser";
import { ShowGrantsContext } from "./TrinoSQLParser";
import { ExplainContext } from "./TrinoSQLParser";
import { ExplainAnalyzeContext } from "./TrinoSQLParser";
import { ShowCreateTableContext } from "./TrinoSQLParser";
import { ShowCreateSchemaContext } from "./TrinoSQLParser";
import { ShowCreateViewContext } from "./TrinoSQLParser";
import { ShowCreateMaterializedViewContext } from "./TrinoSQLParser";
import { ShowTablesContext } from "./TrinoSQLParser";
import { ShowSchemasContext } from "./TrinoSQLParser";
import { ShowCatalogsContext } from "./TrinoSQLParser";
import { ShowColumnsContext } from "./TrinoSQLParser";
import { ShowStatsContext } from "./TrinoSQLParser";
import { ShowStatsForQueryContext } from "./TrinoSQLParser";
import { ShowRolesContext } from "./TrinoSQLParser";
import { ShowRoleGrantsContext } from "./TrinoSQLParser";
import { ShowFunctionsContext } from "./TrinoSQLParser";
import { ShowSessionContext } from "./TrinoSQLParser";
import { SetSessionAuthorizationContext } from "./TrinoSQLParser";
import { ResetSessionAuthorizationContext } from "./TrinoSQLParser";
import { SetSessionContext } from "./TrinoSQLParser";
import { ResetSessionContext } from "./TrinoSQLParser";
import { StartTransactionContext } from "./TrinoSQLParser";
import { CommitContext } from "./TrinoSQLParser";
import { RollbackContext } from "./TrinoSQLParser";
import { PrepareContext } from "./TrinoSQLParser";
import { DeallocateContext } from "./TrinoSQLParser";
import { ExecuteContext } from "./TrinoSQLParser";
import { ExecuteImmediateContext } from "./TrinoSQLParser";
import { DescribeInputContext } from "./TrinoSQLParser";
import { DescribeOutputContext } from "./TrinoSQLParser";
import { SetPathContext } from "./TrinoSQLParser";
import { SetTimeZoneContext } from "./TrinoSQLParser";
import { UpdateContext } from "./TrinoSQLParser";
import { MergeContext } from "./TrinoSQLParser";
import { TimeZoneIntervalContext } from "./TrinoSQLParser";
import { TimeZoneStringContext } from "./TrinoSQLParser";
import { IsolationLevelContext } from "./TrinoSQLParser";
import { TransactionAccessModeContext } from "./TrinoSQLParser";
import { PredicatedContext } from "./TrinoSQLParser";
import { LogicalNotContext } from "./TrinoSQLParser";
import { AndContext } from "./TrinoSQLParser";
import { OrContext } from "./TrinoSQLParser";
import { SingleStatementContext } from "./TrinoSQLParser";
import { StandaloneExpressionContext } from "./TrinoSQLParser";
import { StandalonePathSpecificationContext } from "./TrinoSQLParser";
import { StandaloneTypeContext } from "./TrinoSQLParser";
import { StandaloneRowPatternContext } from "./TrinoSQLParser";
import { StandaloneFunctionSpecificationContext } from "./TrinoSQLParser";
import { StatementContext } from "./TrinoSQLParser";
import { RootQueryContext } from "./TrinoSQLParser";
import { WithFunctionContext } from "./TrinoSQLParser";
import { QueryContext } from "./TrinoSQLParser";
import { WithContext } from "./TrinoSQLParser";
import { TableElementContext } from "./TrinoSQLParser";
import { ColumnDefinitionContext } from "./TrinoSQLParser";
import { LikeClauseContext } from "./TrinoSQLParser";
import { PropertiesContext } from "./TrinoSQLParser";
import { PropertyAssignmentsContext } from "./TrinoSQLParser";
import { PropertyContext } from "./TrinoSQLParser";
import { PropertyValueContext } from "./TrinoSQLParser";
import { QueryNoWithContext } from "./TrinoSQLParser";
import { LimitRowCountContext } from "./TrinoSQLParser";
import { RowCountContext } from "./TrinoSQLParser";
import { QueryTermContext } from "./TrinoSQLParser";
import { QueryPrimaryContext } from "./TrinoSQLParser";
import { SortItemContext } from "./TrinoSQLParser";
import { QuerySpecificationContext } from "./TrinoSQLParser";
import { GroupByContext } from "./TrinoSQLParser";
import { GroupingElementContext } from "./TrinoSQLParser";
import { GroupingSetContext } from "./TrinoSQLParser";
import { WindowDefinitionContext } from "./TrinoSQLParser";
import { WindowSpecificationContext } from "./TrinoSQLParser";
import { NamedQueryContext } from "./TrinoSQLParser";
import { SetQuantifierContext } from "./TrinoSQLParser";
import { SelectItemContext } from "./TrinoSQLParser";
import { RelationContext } from "./TrinoSQLParser";
import { JoinTypeContext } from "./TrinoSQLParser";
import { JoinCriteriaContext } from "./TrinoSQLParser";
import { SampledRelationContext } from "./TrinoSQLParser";
import { SampleTypeContext } from "./TrinoSQLParser";
import { TrimsSpecificationContext } from "./TrinoSQLParser";
import { ListAggOverflowBehaviorContext } from "./TrinoSQLParser";
import { ListaggCountIndicationContext } from "./TrinoSQLParser";
import { PatternRecognitionContext } from "./TrinoSQLParser";
import { MeasureDefinitionContext } from "./TrinoSQLParser";
import { RowsPerMatchContext } from "./TrinoSQLParser";
import { EmptyMatchHandlingContext } from "./TrinoSQLParser";
import { SkipToContext } from "./TrinoSQLParser";
import { SubsetDefinitionContext } from "./TrinoSQLParser";
import { VariableDefinitionContext } from "./TrinoSQLParser";
import { AliasedRelationContext } from "./TrinoSQLParser";
import { ColumnAliasesContext } from "./TrinoSQLParser";
import { RelationPrimaryContext } from "./TrinoSQLParser";
import { JsonTableColumnContext } from "./TrinoSQLParser";
import { JsonTableSpecificPlanContext } from "./TrinoSQLParser";
import { JsonTablePathNameContext } from "./TrinoSQLParser";
import { PlanPrimaryContext } from "./TrinoSQLParser";
import { JsonTableDefaultPlanContext } from "./TrinoSQLParser";
import { TableFunctionCallContext } from "./TrinoSQLParser";
import { TableFunctionArgumentContext } from "./TrinoSQLParser";
import { TableArgumentContext } from "./TrinoSQLParser";
import { TableArgumentRelationContext } from "./TrinoSQLParser";
import { DescriptorArgumentContext } from "./TrinoSQLParser";
import { DescriptorFieldContext } from "./TrinoSQLParser";
import { CopartitionTablesContext } from "./TrinoSQLParser";
import { ExpressionContext } from "./TrinoSQLParser";
import { BooleanExpressionContext } from "./TrinoSQLParser";
import { PredicateContext } from "./TrinoSQLParser";
import { ValueExpressionContext } from "./TrinoSQLParser";
import { PrimaryExpressionContext } from "./TrinoSQLParser";
import { JsonPathInvocationContext } from "./TrinoSQLParser";
import { JsonValueExpressionContext } from "./TrinoSQLParser";
import { JsonRepresentationContext } from "./TrinoSQLParser";
import { JsonArgumentContext } from "./TrinoSQLParser";
import { JsonExistsErrorBehaviorContext } from "./TrinoSQLParser";
import { JsonValueBehaviorContext } from "./TrinoSQLParser";
import { JsonQueryWrapperBehaviorContext } from "./TrinoSQLParser";
import { JsonQueryBehaviorContext } from "./TrinoSQLParser";
import { JsonObjectMemberContext } from "./TrinoSQLParser";
import { ProcessingModeContext } from "./TrinoSQLParser";
import { NullTreatmentContext } from "./TrinoSQLParser";
import { StringContext } from "./TrinoSQLParser";
import { TimeZoneSpecifierContext } from "./TrinoSQLParser";
import { ComparisonOperatorContext } from "./TrinoSQLParser";
import { ComparisonQuantifierContext } from "./TrinoSQLParser";
import { BooleanValueContext } from "./TrinoSQLParser";
import { IntervalContext } from "./TrinoSQLParser";
import { IntervalFieldContext } from "./TrinoSQLParser";
import { NormalFormContext } from "./TrinoSQLParser";
import { TypeContext } from "./TrinoSQLParser";
import { RowFieldContext } from "./TrinoSQLParser";
import { TypeParameterContext } from "./TrinoSQLParser";
import { WhenClauseContext } from "./TrinoSQLParser";
import { FilterContext } from "./TrinoSQLParser";
import { MergeCaseContext } from "./TrinoSQLParser";
import { OverContext } from "./TrinoSQLParser";
import { WindowFrameContext } from "./TrinoSQLParser";
import { FrameExtentContext } from "./TrinoSQLParser";
import { FrameBoundContext } from "./TrinoSQLParser";
import { RowPatternContext } from "./TrinoSQLParser";
import { PatternPrimaryContext } from "./TrinoSQLParser";
import { PatternQuantifierContext } from "./TrinoSQLParser";
import { UpdateAssignmentContext } from "./TrinoSQLParser";
import { ExplainOptionContext } from "./TrinoSQLParser";
import { TransactionModeContext } from "./TrinoSQLParser";
import { LevelOfIsolationContext } from "./TrinoSQLParser";
import { CallArgumentContext } from "./TrinoSQLParser";
import { PathElementContext } from "./TrinoSQLParser";
import { PathSpecificationContext } from "./TrinoSQLParser";
import { FunctionSpecificationContext } from "./TrinoSQLParser";
import { FunctionDeclarationContext } from "./TrinoSQLParser";
import { ParameterDeclarationContext } from "./TrinoSQLParser";
import { ReturnsClauseContext } from "./TrinoSQLParser";
import { RoutineCharacteristicContext } from "./TrinoSQLParser";
import { ControlStatementContext } from "./TrinoSQLParser";
import { CaseStatementWhenClauseContext } from "./TrinoSQLParser";
import { ElseIfClauseContext } from "./TrinoSQLParser";
import { ElseClauseContext } from "./TrinoSQLParser";
import { VariableDeclarationContext } from "./TrinoSQLParser";
import { SqlStatementListContext } from "./TrinoSQLParser";
import { PrivilegeContext } from "./TrinoSQLParser";
import { EntityKindContext } from "./TrinoSQLParser";
import { GrantObjectContext } from "./TrinoSQLParser";
import { QualifiedNameContext } from "./TrinoSQLParser";
import { QueryPeriodContext } from "./TrinoSQLParser";
import { RangeTypeContext } from "./TrinoSQLParser";
import { GrantorContext } from "./TrinoSQLParser";
import { PrincipalContext } from "./TrinoSQLParser";
import { RolesContext } from "./TrinoSQLParser";
import { PrivilegeOrRoleContext } from "./TrinoSQLParser";
import { IdentifierContext } from "./TrinoSQLParser";
import { NumberContext } from "./TrinoSQLParser";
import { AuthorizationUserContext } from "./TrinoSQLParser";
import { NonReservedContext } from "./TrinoSQLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TrinoSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TrinoSQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryRelation?: (ctx: SubqueryRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unnest`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnest?: (ctx: UnnestContext) => Result;

	/**
	 * Visit a parse tree produced by the `lateral`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateral?: (ctx: LateralContext) => Result;

	/**
	 * Visit a parse tree produced by the `tableFunctionInvocation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `jsonTable`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonTable?: (ctx: JsonTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowType?: (ctx: RowTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalType?: (ctx: IntervalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `dateTimeType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeType?: (ctx: DateTimeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `doublePrecisionType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `legacyArrayType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `legacyMapType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyMapType?: (ctx: LegacyMapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `genericType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericType?: (ctx: GenericTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinRelation`
	 * labeled alternative in `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationDefault`
	 * labeled alternative in `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationDefault?: (ctx: RelationDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;

	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;

	/**
	 * Visit a parse tree produced by the `inSubquery`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInSubquery?: (ctx: InSubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `like`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike?: (ctx: LikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullPredicate?: (ctx: NullPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctFrom?: (ctx: DistinctFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitIdentifier?: (ctx: DigitIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternVariable`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariable?: (ctx: PatternVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `emptyPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyPattern?: (ctx: EmptyPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternPermutation`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternPermutation?: (ctx: PatternPermutationContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupedPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedPattern?: (ctx: GroupedPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `partitionStartAnchor`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => Result;

	/**
	 * Visit a parse tree produced by the `partitionEndAnchor`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => Result;

	/**
	 * Visit a parse tree produced by the `excludedPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcludedPattern?: (ctx: ExcludedPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `defaultPropertyValue`
	 * labeled alternative in `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonDefaultPropertyValue`
	 * labeled alternative in `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `explainFormat`
	 * labeled alternative in `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainFormat?: (ctx: ExplainFormatContext) => Result;

	/**
	 * Visit a parse tree produced by the `explainType`
	 * labeled alternative in `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainType?: (ctx: ExplainTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by the `rollup`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollup?: (ctx: RollupContext) => Result;

	/**
	 * Visit a parse tree produced by the `cube`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCube?: (ctx: CubeContext) => Result;

	/**
	 * Visit a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignmentStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCaseStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCaseStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `iterateStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterateStatement?: (ctx: IterateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `leaveStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeaveStatement?: (ctx: LeaveStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `compoundStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `loopStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `repeatStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatStatement?: (ctx: RepeatStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `languageCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguageCharacteristic?: (ctx: LanguageCharacteristicContext) => Result;

	/**
	 * Visit a parse tree produced by the `deterministicCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeterministicCharacteristic?: (ctx: DeterministicCharacteristicContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnsNullOnNullInputCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnsNullOnNullInputCharacteristic?: (ctx: ReturnsNullOnNullInputCharacteristicContext) => Result;

	/**
	 * Visit a parse tree produced by the `calledOnNullInputCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalledOnNullInputCharacteristic?: (ctx: CalledOnNullInputCharacteristicContext) => Result;

	/**
	 * Visit a parse tree produced by the `securityCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecurityCharacteristic?: (ctx: SecurityCharacteristicContext) => Result;

	/**
	 * Visit a parse tree produced by the `commentCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentCharacteristic?: (ctx: CommentCharacteristicContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `concatenation`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by the `tableArgumentTable`
	 * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableArgumentTable?: (ctx: TableArgumentTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `tableArgumentQuery`
	 * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableArgumentQuery?: (ctx: TableArgumentQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantifiedPrimary`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternConcatenation`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternConcatenation?: (ctx: PatternConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternAlternation`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternAlternation?: (ctx: PatternAlternationContext) => Result;

	/**
	 * Visit a parse tree produced by the `specifiedPrincipal`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentUserGrantor`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentRoleGrantor`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => Result;

	/**
	 * Visit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedFrame?: (ctx: UnboundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRowBound?: (ctx: CurrentRowBoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedFrame?: (ctx: BoundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by the `inlineTable`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parameter`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `listagg`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListagg?: (ctx: ListaggContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `measure`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasure?: (ctx: MeasureContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentDate`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentDate?: (ctx: CurrentDateContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentTime`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentTime?: (ctx: CurrentTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentTimestamp`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentTimestamp?: (ctx: CurrentTimestampContext) => Result;

	/**
	 * Visit a parse tree produced by the `localTime`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTime?: (ctx: LocalTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `localTimestamp`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimestamp?: (ctx: LocalTimestampContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentUser`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUser?: (ctx: CurrentUserContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentCatalog`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentCatalog?: (ctx: CurrentCatalogContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentSchema`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentSchema?: (ctx: CurrentSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentPath`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentPath?: (ctx: CurrentPathContext) => Result;

	/**
	 * Visit a parse tree produced by the `trim`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrim?: (ctx: TrimContext) => Result;

	/**
	 * Visit a parse tree produced by the `substring`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;

	/**
	 * Visit a parse tree produced by the `normalize`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalize?: (ctx: NormalizeContext) => Result;

	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `jsonExists`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonExists?: (ctx: JsonExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `jsonValue`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonValue?: (ctx: JsonValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `jsonQuery`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonQuery?: (ctx: JsonQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `jsonObject`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonObject?: (ctx: JsonObjectContext) => Result;

	/**
	 * Visit a parse tree produced by the `jsonArray`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonArray?: (ctx: JsonArrayContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectSingle`
	 * labeled alternative in `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSingle?: (ctx: SelectSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectAll`
	 * labeled alternative in `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAll?: (ctx: SelectAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedArgument?: (ctx: QualifiedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `positionalArgument`
	 * labeled alternative in `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionalArgument?: (ctx: PositionalArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `namedArgument`
	 * labeled alternative in `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `mergeUpdate`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeUpdate?: (ctx: MergeUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by the `mergeDelete`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeDelete?: (ctx: MergeDeleteContext) => Result;

	/**
	 * Visit a parse tree produced by the `mergeInsert`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeInsert?: (ctx: MergeInsertContext) => Result;

	/**
	 * Visit a parse tree produced by the `ordinalityColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinalityColumn?: (ctx: OrdinalityColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueColumn?: (ctx: ValueColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryColumn?: (ctx: QueryColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `nestedColumns`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedColumns?: (ctx: NestedColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `zeroOrMoreQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `oneOrMoreQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `zeroOrOneQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `rangeQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeQuantifier?: (ctx: RangeQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierUser`
	 * labeled alternative in `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierUser?: (ctx: IdentifierUserContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringUser`
	 * labeled alternative in `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringUser?: (ctx: StringUserContext) => Result;

	/**
	 * Visit a parse tree produced by the `leafPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeafPlan?: (ctx: LeafPlanContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinPlan?: (ctx: JoinPlanContext) => Result;

	/**
	 * Visit a parse tree produced by the `unionPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionPlan?: (ctx: UnionPlanContext) => Result;

	/**
	 * Visit a parse tree produced by the `crossPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCrossPlan?: (ctx: CrossPlanContext) => Result;

	/**
	 * Visit a parse tree produced by the `readUncommitted`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadUncommitted?: (ctx: ReadUncommittedContext) => Result;

	/**
	 * Visit a parse tree produced by the `readCommitted`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadCommitted?: (ctx: ReadCommittedContext) => Result;

	/**
	 * Visit a parse tree produced by the `repeatableRead`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatableRead?: (ctx: RepeatableReadContext) => Result;

	/**
	 * Visit a parse tree produced by the `serializable`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializable?: (ctx: SerializableContext) => Result;

	/**
	 * Visit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unspecifiedPrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserPrincipal?: (ctx: UserPrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRolePrincipal?: (ctx: RolePrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by the `statementDefault`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementDefault?: (ctx: StatementDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `use`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;

	/**
	 * Visit a parse tree produced by the `createCatalog`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateCatalog?: (ctx: CreateCatalogContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropCatalog`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropCatalog?: (ctx: DropCatalogContext) => Result;

	/**
	 * Visit a parse tree produced by the `createSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateSchema?: (ctx: CreateSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropSchema?: (ctx: DropSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameSchema?: (ctx: RenameSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `setSchemaAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertInto`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertInto?: (ctx: InsertIntoContext) => Result;

	/**
	 * Visit a parse tree produced by the `delete`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by the `truncateTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTable?: (ctx: TruncateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `commentTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentTable?: (ctx: CommentTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `commentView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentView?: (ctx: CommentViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `commentColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentColumn?: (ctx: CommentColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `addColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddColumn?: (ctx: AddColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameColumn?: (ctx: RenameColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropColumn?: (ctx: DropColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `setColumnType`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetColumnType?: (ctx: SetColumnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropNotNullConstraint`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropNotNullConstraint?: (ctx: DropNotNullConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTableAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTableProperties`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `tableExecute`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExecute?: (ctx: TableExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by the `analyze`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyze?: (ctx: AnalyzeContext) => Result;

	/**
	 * Visit a parse tree produced by the `createMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `createView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `refreshMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `setMaterializedViewProperties`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameView?: (ctx: RenameViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `setViewAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => Result;

	/**
	 * Visit a parse tree produced by the `call`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by the `createFunction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunction?: (ctx: CreateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropFunction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `createRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRole?: (ctx: CreateRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRole?: (ctx: DropRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `grantRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRoles?: (ctx: GrantRolesContext) => Result;

	/**
	 * Visit a parse tree produced by the `grantPrivileges`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantPrivileges?: (ctx: GrantPrivilegesContext) => Result;

	/**
	 * Visit a parse tree produced by the `revokeRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeRoles?: (ctx: RevokeRolesContext) => Result;

	/**
	 * Visit a parse tree produced by the `revokePrivileges`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokePrivileges?: (ctx: RevokePrivilegesContext) => Result;

	/**
	 * Visit a parse tree produced by the `deny`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeny?: (ctx: DenyContext) => Result;

	/**
	 * Visit a parse tree produced by the `setRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetRole?: (ctx: SetRoleContext) => Result;

	/**
	 * Visit a parse tree produced by the `showGrants`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;

	/**
	 * Visit a parse tree produced by the `explainAnalyze`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainAnalyze?: (ctx: ExplainAnalyzeContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTables`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showSchemas`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemas?: (ctx: ShowSchemasContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCatalogs`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showColumns`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumns?: (ctx: ShowColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showStats`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStats?: (ctx: ShowStatsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showStatsForQuery`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `showRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showRoleGrants`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showFunctions`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSession?: (ctx: ShowSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `setSessionAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSessionAuthorization?: (ctx: SetSessionAuthorizationContext) => Result;

	/**
	 * Visit a parse tree produced by the `resetSessionAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetSessionAuthorization?: (ctx: ResetSessionAuthorizationContext) => Result;

	/**
	 * Visit a parse tree produced by the `setSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSession?: (ctx: SetSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `resetSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetSession?: (ctx: ResetSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `startTransaction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransaction?: (ctx: StartTransactionContext) => Result;

	/**
	 * Visit a parse tree produced by the `commit`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommit?: (ctx: CommitContext) => Result;

	/**
	 * Visit a parse tree produced by the `rollback`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollback?: (ctx: RollbackContext) => Result;

	/**
	 * Visit a parse tree produced by the `prepare`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepare?: (ctx: PrepareContext) => Result;

	/**
	 * Visit a parse tree produced by the `deallocate`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeallocate?: (ctx: DeallocateContext) => Result;

	/**
	 * Visit a parse tree produced by the `execute`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute?: (ctx: ExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by the `executeImmediate`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteImmediate?: (ctx: ExecuteImmediateContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeInput`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeInput?: (ctx: DescribeInputContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeOutput`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeOutput?: (ctx: DescribeOutputContext) => Result;

	/**
	 * Visit a parse tree produced by the `setPath`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPath?: (ctx: SetPathContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTimeZone`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;

	/**
	 * Visit a parse tree produced by the `update`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate?: (ctx: UpdateContext) => Result;

	/**
	 * Visit a parse tree produced by the `merge`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge?: (ctx: MergeContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneString?: (ctx: TimeZoneStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `isolationLevel`
	 * labeled alternative in `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;

	/**
	 * Visit a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `and`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by the `or`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.singleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStatement?: (ctx: SingleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.standaloneExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneExpression?: (ctx: StandaloneExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.standalonePathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.standaloneType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneType?: (ctx: StandaloneTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.standaloneRowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.standaloneFunctionSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneFunctionSpecification?: (ctx: StandaloneFunctionSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.rootQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootQuery?: (ctx: RootQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.withFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithFunction?: (ctx: WithFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith?: (ctx: WithContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.tableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableElement?: (ctx: TableElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.likeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeClause?: (ctx: LikeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperties?: (ctx: PropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.propertyAssignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyValue?: (ctx: PropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.limitRowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitRowCount?: (ctx: LimitRowCountContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.rowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowCount?: (ctx: RowCountContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTerm?: (ctx: QueryTermContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.groupBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBy?: (ctx: GroupByContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingElement?: (ctx: GroupingElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.windowDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowDefinition?: (ctx: WindowDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.windowSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpecification?: (ctx: WindowSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.namedQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedQuery?: (ctx: NamedQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.sampledRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampledRelation?: (ctx: SampledRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.sampleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleType?: (ctx: SampleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.trimsSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimsSpecification?: (ctx: TrimsSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.listAggOverflowBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.listaggCountIndication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaggCountIndication?: (ctx: ListaggCountIndicationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.patternRecognition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternRecognition?: (ctx: PatternRecognitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.measureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasureDefinition?: (ctx: MeasureDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.rowsPerMatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowsPerMatch?: (ctx: RowsPerMatchContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.emptyMatchHandling`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.skipTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkipTo?: (ctx: SkipToContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.subsetDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubsetDefinition?: (ctx: SubsetDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.variableDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.aliasedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.columnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonTableColumn?: (ctx: JsonTableColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonTableSpecificPlan?: (ctx: JsonTableSpecificPlanContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonTablePathName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonTablePathName?: (ctx: JsonTablePathNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.planPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlanPrimary?: (ctx: PlanPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonTableDefaultPlan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonTableDefaultPlan?: (ctx: JsonTableDefaultPlanContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.tableFunctionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFunctionCall?: (ctx: TableFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.tableFunctionArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.tableArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableArgument?: (ctx: TableArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableArgumentRelation?: (ctx: TableArgumentRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.descriptorArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptorArgument?: (ctx: DescriptorArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.descriptorField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptorField?: (ctx: DescriptorFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.copartitionTables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopartitionTables?: (ctx: CopartitionTablesContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonPathInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonPathInvocation?: (ctx: JsonPathInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonValueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonValueExpression?: (ctx: JsonValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonRepresentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonRepresentation?: (ctx: JsonRepresentationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonArgument?: (ctx: JsonArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonExistsErrorBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonValueBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonQueryWrapperBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonQueryBehavior`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.jsonObjectMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonObjectMember?: (ctx: JsonObjectMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.processingMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessingMode?: (ctx: ProcessingModeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.nullTreatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullTreatment?: (ctx: NullTreatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneSpecifier?: (ctx: TimeZoneSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.intervalField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalField?: (ctx: IntervalFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.normalForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalForm?: (ctx: NormalFormContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.rowField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowField?: (ctx: RowFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeCase?: (ctx: MergeCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.over`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOver?: (ctx: OverContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.frameExtent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameExtent?: (ctx: FrameExtentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowPattern?: (ctx: RowPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternPrimary?: (ctx: PatternPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternQuantifier?: (ctx: PatternQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.updateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainOption?: (ctx: ExplainOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionMode?: (ctx: TransactionModeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallArgument?: (ctx: CallArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathElement?: (ctx: PathElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.pathSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathSpecification?: (ctx: PathSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.functionSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSpecification?: (ctx: FunctionSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.returnsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnsClause?: (ctx: ReturnsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineCharacteristic?: (ctx: RoutineCharacteristicContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlStatement?: (ctx: ControlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.caseStatementWhenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.elseIfClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfClause?: (ctx: ElseIfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.elseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseClause?: (ctx: ElseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.sqlStatementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatementList?: (ctx: SqlStatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.privilege`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilege?: (ctx: PrivilegeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.entityKind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityKind?: (ctx: EntityKindContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.grantObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantObject?: (ctx: GrantObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.queryPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPeriod?: (ctx: QueryPeriodContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.rangeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeType?: (ctx: RangeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantor?: (ctx: GrantorContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipal?: (ctx: PrincipalContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.roles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoles?: (ctx: RolesContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.privilegeOrRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeOrRole?: (ctx: PrivilegeOrRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthorizationUser?: (ctx: AuthorizationUserContext) => Result;

	/**
	 * Visit a parse tree produced by `TrinoSQLParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

