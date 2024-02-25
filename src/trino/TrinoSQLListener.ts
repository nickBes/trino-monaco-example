// Generated from ./TrinoSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `TrinoSQLParser`.
 */
export interface TrinoSQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `tableName`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by the `tableName`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubqueryRelation?: (ctx: SubqueryRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `unnest`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterUnnest?: (ctx: UnnestContext) => void;
	/**
	 * Exit a parse tree produced by the `unnest`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitUnnest?: (ctx: UnnestContext) => void;

	/**
	 * Enter a parse tree produced by the `lateral`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterLateral?: (ctx: LateralContext) => void;
	/**
	 * Exit a parse tree produced by the `lateral`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitLateral?: (ctx: LateralContext) => void;

	/**
	 * Enter a parse tree produced by the `tableFunctionInvocation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `tableFunctionInvocation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `jsonTable`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterJsonTable?: (ctx: JsonTableContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonTable`
	 * labeled alternative in `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitJsonTable?: (ctx: JsonTableContext) => void;

	/**
	 * Enter a parse tree produced by the `rowType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterRowType?: (ctx: RowTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `rowType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitRowType?: (ctx: RowTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `intervalType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterIntervalType?: (ctx: IntervalTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitIntervalType?: (ctx: IntervalTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `dateTimeType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterDateTimeType?: (ctx: DateTimeTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `dateTimeType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitDateTimeType?: (ctx: DateTimeTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `doublePrecisionType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `doublePrecisionType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `legacyArrayType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `legacyArrayType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `legacyMapType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `legacyMapType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitLegacyMapType?: (ctx: LegacyMapTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `genericType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterGenericType?: (ctx: GenericTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `genericType`
	 * labeled alternative in `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitGenericType?: (ctx: GenericTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `joinRelation`
	 * labeled alternative in `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 */
	enterJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `joinRelation`
	 * labeled alternative in `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 */
	exitJoinRelation?: (ctx: JoinRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `relationDefault`
	 * labeled alternative in `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelationDefault?: (ctx: RelationDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `relationDefault`
	 * labeled alternative in `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelationDefault?: (ctx: RelationDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `between`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterBetween?: (ctx: BetweenContext) => void;
	/**
	 * Exit a parse tree produced by the `between`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitBetween?: (ctx: BetweenContext) => void;

	/**
	 * Enter a parse tree produced by the `inList`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInList?: (ctx: InListContext) => void;
	/**
	 * Exit a parse tree produced by the `inList`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInList?: (ctx: InListContext) => void;

	/**
	 * Enter a parse tree produced by the `inSubquery`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterInSubquery?: (ctx: InSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `inSubquery`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitInSubquery?: (ctx: InSubqueryContext) => void;

	/**
	 * Enter a parse tree produced by the `like`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterLike?: (ctx: LikeContext) => void;
	/**
	 * Exit a parse tree produced by the `like`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitLike?: (ctx: LikeContext) => void;

	/**
	 * Enter a parse tree produced by the `nullPredicate`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterNullPredicate?: (ctx: NullPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitNullPredicate?: (ctx: NullPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `distinctFrom`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterDistinctFrom?: (ctx: DistinctFromContext) => void;
	/**
	 * Exit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitDistinctFrom?: (ctx: DistinctFromContext) => void;

	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 */
	enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 */
	exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `setOperation`
	 * labeled alternative in `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `setOperation`
	 * labeled alternative in `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitSetOperation?: (ctx: SetOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitDigitIdentifier?: (ctx: DigitIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `patternVariable`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPatternVariable?: (ctx: PatternVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `patternVariable`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPatternVariable?: (ctx: PatternVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `emptyPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterEmptyPattern?: (ctx: EmptyPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `emptyPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitEmptyPattern?: (ctx: EmptyPatternContext) => void;

	/**
	 * Enter a parse tree produced by the `patternPermutation`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPatternPermutation?: (ctx: PatternPermutationContext) => void;
	/**
	 * Exit a parse tree produced by the `patternPermutation`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPatternPermutation?: (ctx: PatternPermutationContext) => void;

	/**
	 * Enter a parse tree produced by the `groupedPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterGroupedPattern?: (ctx: GroupedPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `groupedPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitGroupedPattern?: (ctx: GroupedPatternContext) => void;

	/**
	 * Enter a parse tree produced by the `partitionStartAnchor`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionStartAnchor`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;

	/**
	 * Enter a parse tree produced by the `partitionEndAnchor`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionEndAnchor`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;

	/**
	 * Enter a parse tree produced by the `excludedPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterExcludedPattern?: (ctx: ExcludedPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `excludedPattern`
	 * labeled alternative in `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitExcludedPattern?: (ctx: ExcludedPatternContext) => void;

	/**
	 * Enter a parse tree produced by the `defaultPropertyValue`
	 * labeled alternative in `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by the `defaultPropertyValue`
	 * labeled alternative in `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by the `nonDefaultPropertyValue`
	 * labeled alternative in `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by the `nonDefaultPropertyValue`
	 * labeled alternative in `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by the `explainFormat`
	 * labeled alternative in `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 */
	enterExplainFormat?: (ctx: ExplainFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `explainFormat`
	 * labeled alternative in `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 */
	exitExplainFormat?: (ctx: ExplainFormatContext) => void;

	/**
	 * Enter a parse tree produced by the `explainType`
	 * labeled alternative in `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 */
	enterExplainType?: (ctx: ExplainTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `explainType`
	 * labeled alternative in `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 */
	exitExplainType?: (ctx: ExplainTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by the `rollup`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterRollup?: (ctx: RollupContext) => void;
	/**
	 * Exit a parse tree produced by the `rollup`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitRollup?: (ctx: RollupContext) => void;

	/**
	 * Enter a parse tree produced by the `cube`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterCube?: (ctx: CubeContext) => void;
	/**
	 * Exit a parse tree produced by the `cube`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitCube?: (ctx: CubeContext) => void;

	/**
	 * Enter a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
	/**
	 * Exit a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;

	/**
	 * Enter a parse tree produced by the `returnStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `returnStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `assignmentStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `assignmentStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCaseStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCaseStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCaseStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCaseStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ifStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ifStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `iterateStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterIterateStatement?: (ctx: IterateStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `iterateStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitIterateStatement?: (ctx: IterateStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `leaveStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterLeaveStatement?: (ctx: LeaveStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `leaveStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitLeaveStatement?: (ctx: LeaveStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `compoundStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `compoundStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `loopStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `loopStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `whileStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `whileStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `repeatStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `repeatStatement`
	 * labeled alternative in `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitRepeatStatement?: (ctx: RepeatStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `languageCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterLanguageCharacteristic?: (ctx: LanguageCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by the `languageCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitLanguageCharacteristic?: (ctx: LanguageCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by the `deterministicCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterDeterministicCharacteristic?: (ctx: DeterministicCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by the `deterministicCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitDeterministicCharacteristic?: (ctx: DeterministicCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by the `returnsNullOnNullInputCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterReturnsNullOnNullInputCharacteristic?: (ctx: ReturnsNullOnNullInputCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by the `returnsNullOnNullInputCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitReturnsNullOnNullInputCharacteristic?: (ctx: ReturnsNullOnNullInputCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by the `calledOnNullInputCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterCalledOnNullInputCharacteristic?: (ctx: CalledOnNullInputCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by the `calledOnNullInputCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitCalledOnNullInputCharacteristic?: (ctx: CalledOnNullInputCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by the `securityCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterSecurityCharacteristic?: (ctx: SecurityCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by the `securityCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitSecurityCharacteristic?: (ctx: SecurityCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by the `commentCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterCommentCharacteristic?: (ctx: CommentCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by the `commentCharacteristic`
	 * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitCommentCharacteristic?: (ctx: CommentCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `atTimeZone`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterAtTimeZone?: (ctx: AtTimeZoneContext) => void;
	/**
	 * Exit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitAtTimeZone?: (ctx: AtTimeZoneContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `concatenation`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by the `concatenation`
	 * labeled alternative in `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by the `tableArgumentTable`
	 * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	enterTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
	/**
	 * Exit a parse tree produced by the `tableArgumentTable`
	 * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	exitTableArgumentTable?: (ctx: TableArgumentTableContext) => void;

	/**
	 * Enter a parse tree produced by the `tableArgumentQuery`
	 * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	enterTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `tableArgumentQuery`
	 * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	exitTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `quantifiedPrimary`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `quantifiedPrimary`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `patternConcatenation`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	enterPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by the `patternConcatenation`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	exitPatternConcatenation?: (ctx: PatternConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by the `patternAlternation`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	enterPatternAlternation?: (ctx: PatternAlternationContext) => void;
	/**
	 * Exit a parse tree produced by the `patternAlternation`
	 * labeled alternative in `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	exitPatternAlternation?: (ctx: PatternAlternationContext) => void;

	/**
	 * Enter a parse tree produced by the `specifiedPrincipal`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 */
	enterSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `specifiedPrincipal`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 */
	exitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `currentUserGrantor`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 */
	enterCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
	/**
	 * Exit a parse tree produced by the `currentUserGrantor`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 */
	exitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;

	/**
	 * Enter a parse tree produced by the `currentRoleGrantor`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 */
	enterCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
	/**
	 * Exit a parse tree produced by the `currentRoleGrantor`
	 * labeled alternative in `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 */
	exitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;

	/**
	 * Enter a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
	/**
	 * Exit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitUnboundedFrame?: (ctx: UnboundedFrameContext) => void;

	/**
	 * Enter a parse tree produced by the `currentRowBound`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
	/**
	 * Exit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;

	/**
	 * Enter a parse tree produced by the `boundedFrame`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterBoundedFrame?: (ctx: BoundedFrameContext) => void;
	/**
	 * Exit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitBoundedFrame?: (ctx: BoundedFrameContext) => void;

	/**
	 * Enter a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `table`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by the `table`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by the `inlineTable`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Exit a parse tree produced by the `inlineTable`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitInlineTable?: (ctx: InlineTableContext) => void;

	/**
	 * Enter a parse tree produced by the `subquery`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `subquery`
	 * labeled alternative in `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `typeConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeConstructor?: (ctx: TypeConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `parameter`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `parameter`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by the `position`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by the `position`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by the `rowConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitRowConstructor?: (ctx: RowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `listagg`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterListagg?: (ctx: ListaggContext) => void;
	/**
	 * Exit a parse tree produced by the `listagg`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitListagg?: (ctx: ListaggContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `measure`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterMeasure?: (ctx: MeasureContext) => void;
	/**
	 * Exit a parse tree produced by the `measure`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitMeasure?: (ctx: MeasureContext) => void;

	/**
	 * Enter a parse tree produced by the `lambda`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by the `lambda`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `exists`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `exists`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayConstructor?: (ctx: ArrayConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayConstructor?: (ctx: ArrayConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `currentDate`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentDate?: (ctx: CurrentDateContext) => void;
	/**
	 * Exit a parse tree produced by the `currentDate`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentDate?: (ctx: CurrentDateContext) => void;

	/**
	 * Enter a parse tree produced by the `currentTime`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentTime?: (ctx: CurrentTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `currentTime`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentTime?: (ctx: CurrentTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `currentTimestamp`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
	/**
	 * Exit a parse tree produced by the `currentTimestamp`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;

	/**
	 * Enter a parse tree produced by the `localTime`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLocalTime?: (ctx: LocalTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `localTime`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLocalTime?: (ctx: LocalTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `localTimestamp`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLocalTimestamp?: (ctx: LocalTimestampContext) => void;
	/**
	 * Exit a parse tree produced by the `localTimestamp`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLocalTimestamp?: (ctx: LocalTimestampContext) => void;

	/**
	 * Enter a parse tree produced by the `currentUser`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentUser?: (ctx: CurrentUserContext) => void;
	/**
	 * Exit a parse tree produced by the `currentUser`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentUser?: (ctx: CurrentUserContext) => void;

	/**
	 * Enter a parse tree produced by the `currentCatalog`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
	/**
	 * Exit a parse tree produced by the `currentCatalog`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentCatalog?: (ctx: CurrentCatalogContext) => void;

	/**
	 * Enter a parse tree produced by the `currentSchema`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentSchema?: (ctx: CurrentSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `currentSchema`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentSchema?: (ctx: CurrentSchemaContext) => void;

	/**
	 * Enter a parse tree produced by the `currentPath`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentPath?: (ctx: CurrentPathContext) => void;
	/**
	 * Exit a parse tree produced by the `currentPath`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentPath?: (ctx: CurrentPathContext) => void;

	/**
	 * Enter a parse tree produced by the `trim`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTrim?: (ctx: TrimContext) => void;
	/**
	 * Exit a parse tree produced by the `trim`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTrim?: (ctx: TrimContext) => void;

	/**
	 * Enter a parse tree produced by the `substring`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubstring?: (ctx: SubstringContext) => void;
	/**
	 * Exit a parse tree produced by the `substring`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubstring?: (ctx: SubstringContext) => void;

	/**
	 * Enter a parse tree produced by the `normalize`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNormalize?: (ctx: NormalizeContext) => void;
	/**
	 * Exit a parse tree produced by the `normalize`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNormalize?: (ctx: NormalizeContext) => void;

	/**
	 * Enter a parse tree produced by the `extract`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExtract?: (ctx: ExtractContext) => void;
	/**
	 * Exit a parse tree produced by the `extract`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExtract?: (ctx: ExtractContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `groupingOperation`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterGroupingOperation?: (ctx: GroupingOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `groupingOperation`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitGroupingOperation?: (ctx: GroupingOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `jsonExists`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonExists?: (ctx: JsonExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonExists`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonExists?: (ctx: JsonExistsContext) => void;

	/**
	 * Enter a parse tree produced by the `jsonValue`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonValue?: (ctx: JsonValueContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonValue`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonValue?: (ctx: JsonValueContext) => void;

	/**
	 * Enter a parse tree produced by the `jsonQuery`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonQuery?: (ctx: JsonQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonQuery`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonQuery?: (ctx: JsonQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `jsonObject`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonObject?: (ctx: JsonObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonObject`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonObject?: (ctx: JsonObjectContext) => void;

	/**
	 * Enter a parse tree produced by the `jsonArray`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonArray?: (ctx: JsonArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `jsonArray`
	 * labeled alternative in `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonArray?: (ctx: JsonArrayContext) => void;

	/**
	 * Enter a parse tree produced by the `selectSingle`
	 * labeled alternative in `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectSingle?: (ctx: SelectSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `selectSingle`
	 * labeled alternative in `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectSingle?: (ctx: SelectSingleContext) => void;

	/**
	 * Enter a parse tree produced by the `selectAll`
	 * labeled alternative in `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectAll?: (ctx: SelectAllContext) => void;
	/**
	 * Exit a parse tree produced by the `selectAll`
	 * labeled alternative in `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectAll?: (ctx: SelectAllContext) => void;

	/**
	 * Enter a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `qualifiedArgument`
	 * labeled alternative in `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `unqualifiedArgument`
	 * labeled alternative in `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by the `positionalArgument`
	 * labeled alternative in `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 */
	enterPositionalArgument?: (ctx: PositionalArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `positionalArgument`
	 * labeled alternative in `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 */
	exitPositionalArgument?: (ctx: PositionalArgumentContext) => void;

	/**
	 * Enter a parse tree produced by the `namedArgument`
	 * labeled alternative in `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 */
	enterNamedArgument?: (ctx: NamedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by the `namedArgument`
	 * labeled alternative in `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 */
	exitNamedArgument?: (ctx: NamedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by the `mergeUpdate`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	enterMergeUpdate?: (ctx: MergeUpdateContext) => void;
	/**
	 * Exit a parse tree produced by the `mergeUpdate`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	exitMergeUpdate?: (ctx: MergeUpdateContext) => void;

	/**
	 * Enter a parse tree produced by the `mergeDelete`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	enterMergeDelete?: (ctx: MergeDeleteContext) => void;
	/**
	 * Exit a parse tree produced by the `mergeDelete`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	exitMergeDelete?: (ctx: MergeDeleteContext) => void;

	/**
	 * Enter a parse tree produced by the `mergeInsert`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	enterMergeInsert?: (ctx: MergeInsertContext) => void;
	/**
	 * Exit a parse tree produced by the `mergeInsert`
	 * labeled alternative in `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	exitMergeInsert?: (ctx: MergeInsertContext) => void;

	/**
	 * Enter a parse tree produced by the `ordinalityColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	enterOrdinalityColumn?: (ctx: OrdinalityColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `ordinalityColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	exitOrdinalityColumn?: (ctx: OrdinalityColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `valueColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	enterValueColumn?: (ctx: ValueColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `valueColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	exitValueColumn?: (ctx: ValueColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `queryColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	enterQueryColumn?: (ctx: QueryColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `queryColumn`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	exitQueryColumn?: (ctx: QueryColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `nestedColumns`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	enterNestedColumns?: (ctx: NestedColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `nestedColumns`
	 * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	exitNestedColumns?: (ctx: NestedColumnsContext) => void;

	/**
	 * Enter a parse tree produced by the `zeroOrMoreQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `zeroOrMoreQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by the `oneOrMoreQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `oneOrMoreQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by the `zeroOrOneQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `zeroOrOneQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by the `rangeQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by the `rangeQuantifier`
	 * labeled alternative in `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitRangeQuantifier?: (ctx: RangeQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierUser`
	 * labeled alternative in `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 */
	enterIdentifierUser?: (ctx: IdentifierUserContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierUser`
	 * labeled alternative in `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 */
	exitIdentifierUser?: (ctx: IdentifierUserContext) => void;

	/**
	 * Enter a parse tree produced by the `stringUser`
	 * labeled alternative in `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 */
	enterStringUser?: (ctx: StringUserContext) => void;
	/**
	 * Exit a parse tree produced by the `stringUser`
	 * labeled alternative in `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 */
	exitStringUser?: (ctx: StringUserContext) => void;

	/**
	 * Enter a parse tree produced by the `leafPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	enterLeafPlan?: (ctx: LeafPlanContext) => void;
	/**
	 * Exit a parse tree produced by the `leafPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	exitLeafPlan?: (ctx: LeafPlanContext) => void;

	/**
	 * Enter a parse tree produced by the `joinPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	enterJoinPlan?: (ctx: JoinPlanContext) => void;
	/**
	 * Exit a parse tree produced by the `joinPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	exitJoinPlan?: (ctx: JoinPlanContext) => void;

	/**
	 * Enter a parse tree produced by the `unionPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	enterUnionPlan?: (ctx: UnionPlanContext) => void;
	/**
	 * Exit a parse tree produced by the `unionPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	exitUnionPlan?: (ctx: UnionPlanContext) => void;

	/**
	 * Enter a parse tree produced by the `crossPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	enterCrossPlan?: (ctx: CrossPlanContext) => void;
	/**
	 * Exit a parse tree produced by the `crossPlan`
	 * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	exitCrossPlan?: (ctx: CrossPlanContext) => void;

	/**
	 * Enter a parse tree produced by the `readUncommitted`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterReadUncommitted?: (ctx: ReadUncommittedContext) => void;
	/**
	 * Exit a parse tree produced by the `readUncommitted`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitReadUncommitted?: (ctx: ReadUncommittedContext) => void;

	/**
	 * Enter a parse tree produced by the `readCommitted`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterReadCommitted?: (ctx: ReadCommittedContext) => void;
	/**
	 * Exit a parse tree produced by the `readCommitted`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitReadCommitted?: (ctx: ReadCommittedContext) => void;

	/**
	 * Enter a parse tree produced by the `repeatableRead`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterRepeatableRead?: (ctx: RepeatableReadContext) => void;
	/**
	 * Exit a parse tree produced by the `repeatableRead`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitRepeatableRead?: (ctx: RepeatableReadContext) => void;

	/**
	 * Enter a parse tree produced by the `serializable`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterSerializable?: (ctx: SerializableContext) => void;
	/**
	 * Exit a parse tree produced by the `serializable`
	 * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitSerializable?: (ctx: SerializableContext) => void;

	/**
	 * Enter a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 */
	enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `basicStringLiteral`
	 * labeled alternative in `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 */
	exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 */
	enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `unicodeStringLiteral`
	 * labeled alternative in `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 */
	exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `unspecifiedPrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 */
	enterUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `unspecifiedPrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 */
	exitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `userPrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 */
	enterUserPrincipal?: (ctx: UserPrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `userPrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 */
	exitUserPrincipal?: (ctx: UserPrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 */
	enterRolePrincipal?: (ctx: RolePrincipalContext) => void;
	/**
	 * Exit a parse tree produced by the `rolePrincipal`
	 * labeled alternative in `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 */
	exitRolePrincipal?: (ctx: RolePrincipalContext) => void;

	/**
	 * Enter a parse tree produced by the `statementDefault`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementDefault?: (ctx: StatementDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `statementDefault`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementDefault?: (ctx: StatementDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `use`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUse?: (ctx: UseContext) => void;
	/**
	 * Exit a parse tree produced by the `use`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUse?: (ctx: UseContext) => void;

	/**
	 * Enter a parse tree produced by the `createCatalog`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateCatalog?: (ctx: CreateCatalogContext) => void;
	/**
	 * Exit a parse tree produced by the `createCatalog`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateCatalog?: (ctx: CreateCatalogContext) => void;

	/**
	 * Enter a parse tree produced by the `dropCatalog`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropCatalog?: (ctx: DropCatalogContext) => void;
	/**
	 * Exit a parse tree produced by the `dropCatalog`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropCatalog?: (ctx: DropCatalogContext) => void;

	/**
	 * Enter a parse tree produced by the `createSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateSchema?: (ctx: CreateSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `createSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateSchema?: (ctx: CreateSchemaContext) => void;

	/**
	 * Enter a parse tree produced by the `dropSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropSchema?: (ctx: DropSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `dropSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropSchema?: (ctx: DropSchemaContext) => void;

	/**
	 * Enter a parse tree produced by the `renameSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameSchema?: (ctx: RenameSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `renameSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameSchema?: (ctx: RenameSchemaContext) => void;

	/**
	 * Enter a parse tree produced by the `setSchemaAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
	/**
	 * Exit a parse tree produced by the `setSchemaAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;

	/**
	 * Enter a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
	/**
	 * Exit a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;

	/**
	 * Enter a parse tree produced by the `createTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `dropTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by the `dropTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by the `insertInto`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterInsertInto?: (ctx: InsertIntoContext) => void;
	/**
	 * Exit a parse tree produced by the `insertInto`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitInsertInto?: (ctx: InsertIntoContext) => void;

	/**
	 * Enter a parse tree produced by the `delete`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDelete?: (ctx: DeleteContext) => void;
	/**
	 * Exit a parse tree produced by the `delete`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDelete?: (ctx: DeleteContext) => void;

	/**
	 * Enter a parse tree produced by the `truncateTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTruncateTable?: (ctx: TruncateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `truncateTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTruncateTable?: (ctx: TruncateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `commentTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommentTable?: (ctx: CommentTableContext) => void;
	/**
	 * Exit a parse tree produced by the `commentTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommentTable?: (ctx: CommentTableContext) => void;

	/**
	 * Enter a parse tree produced by the `commentView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommentView?: (ctx: CommentViewContext) => void;
	/**
	 * Exit a parse tree produced by the `commentView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommentView?: (ctx: CommentViewContext) => void;

	/**
	 * Enter a parse tree produced by the `commentColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommentColumn?: (ctx: CommentColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `commentColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommentColumn?: (ctx: CommentColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `renameTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Exit a parse tree produced by the `renameTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameTable?: (ctx: RenameTableContext) => void;

	/**
	 * Enter a parse tree produced by the `addColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddColumn?: (ctx: AddColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `addColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddColumn?: (ctx: AddColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `renameColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameColumn?: (ctx: RenameColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `renameColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameColumn?: (ctx: RenameColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `dropColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropColumn?: (ctx: DropColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `dropColumn`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropColumn?: (ctx: DropColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `setColumnType`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetColumnType?: (ctx: SetColumnTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `setColumnType`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetColumnType?: (ctx: SetColumnTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `dropNotNullConstraint`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropNotNullConstraint?: (ctx: DropNotNullConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `dropNotNullConstraint`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropNotNullConstraint?: (ctx: DropNotNullConstraintContext) => void;

	/**
	 * Enter a parse tree produced by the `setTableAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
	/**
	 * Exit a parse tree produced by the `setTableAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;

	/**
	 * Enter a parse tree produced by the `setTableProperties`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `setTableProperties`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `tableExecute`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTableExecute?: (ctx: TableExecuteContext) => void;
	/**
	 * Exit a parse tree produced by the `tableExecute`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTableExecute?: (ctx: TableExecuteContext) => void;

	/**
	 * Enter a parse tree produced by the `analyze`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAnalyze?: (ctx: AnalyzeContext) => void;
	/**
	 * Exit a parse tree produced by the `analyze`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAnalyze?: (ctx: AnalyzeContext) => void;

	/**
	 * Enter a parse tree produced by the `createMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `createMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by the `createView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by the `createView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;

	/**
	 * Enter a parse tree produced by the `refreshMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `refreshMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by the `dropMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `dropMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by the `renameMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `renameMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by the `setMaterializedViewProperties`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `setMaterializedViewProperties`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `dropView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropView?: (ctx: DropViewContext) => void;
	/**
	 * Exit a parse tree produced by the `dropView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropView?: (ctx: DropViewContext) => void;

	/**
	 * Enter a parse tree produced by the `renameView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameView?: (ctx: RenameViewContext) => void;
	/**
	 * Exit a parse tree produced by the `renameView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameView?: (ctx: RenameViewContext) => void;

	/**
	 * Enter a parse tree produced by the `setViewAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
	/**
	 * Exit a parse tree produced by the `setViewAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;

	/**
	 * Enter a parse tree produced by the `call`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by the `call`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by the `createFunction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `createFunction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateFunction?: (ctx: CreateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `dropFunction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `dropFunction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `createRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateRole?: (ctx: CreateRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `createRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateRole?: (ctx: CreateRoleContext) => void;

	/**
	 * Enter a parse tree produced by the `dropRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropRole?: (ctx: DropRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `dropRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropRole?: (ctx: DropRoleContext) => void;

	/**
	 * Enter a parse tree produced by the `grantRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterGrantRoles?: (ctx: GrantRolesContext) => void;
	/**
	 * Exit a parse tree produced by the `grantRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitGrantRoles?: (ctx: GrantRolesContext) => void;

	/**
	 * Enter a parse tree produced by the `grantPrivileges`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
	/**
	 * Exit a parse tree produced by the `grantPrivileges`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;

	/**
	 * Enter a parse tree produced by the `revokeRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRevokeRoles?: (ctx: RevokeRolesContext) => void;
	/**
	 * Exit a parse tree produced by the `revokeRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRevokeRoles?: (ctx: RevokeRolesContext) => void;

	/**
	 * Enter a parse tree produced by the `revokePrivileges`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
	/**
	 * Exit a parse tree produced by the `revokePrivileges`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;

	/**
	 * Enter a parse tree produced by the `deny`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeny?: (ctx: DenyContext) => void;
	/**
	 * Exit a parse tree produced by the `deny`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeny?: (ctx: DenyContext) => void;

	/**
	 * Enter a parse tree produced by the `setRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetRole?: (ctx: SetRoleContext) => void;
	/**
	 * Exit a parse tree produced by the `setRole`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetRole?: (ctx: SetRoleContext) => void;

	/**
	 * Enter a parse tree produced by the `showGrants`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowGrants?: (ctx: ShowGrantsContext) => void;
	/**
	 * Exit a parse tree produced by the `showGrants`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowGrants?: (ctx: ShowGrantsContext) => void;

	/**
	 * Enter a parse tree produced by the `explain`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExplain?: (ctx: ExplainContext) => void;
	/**
	 * Exit a parse tree produced by the `explain`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExplain?: (ctx: ExplainContext) => void;

	/**
	 * Enter a parse tree produced by the `explainAnalyze`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
	/**
	 * Exit a parse tree produced by the `explainAnalyze`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;

	/**
	 * Enter a parse tree produced by the `showCreateTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `showCreateSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateSchema`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;

	/**
	 * Enter a parse tree produced by the `showCreateView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateView?: (ctx: ShowCreateViewContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateView?: (ctx: ShowCreateViewContext) => void;

	/**
	 * Enter a parse tree produced by the `showCreateMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateMaterializedView`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by the `showTables`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowTables?: (ctx: ShowTablesContext) => void;
	/**
	 * Exit a parse tree produced by the `showTables`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowTables?: (ctx: ShowTablesContext) => void;

	/**
	 * Enter a parse tree produced by the `showSchemas`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowSchemas?: (ctx: ShowSchemasContext) => void;
	/**
	 * Exit a parse tree produced by the `showSchemas`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowSchemas?: (ctx: ShowSchemasContext) => void;

	/**
	 * Enter a parse tree produced by the `showCatalogs`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
	/**
	 * Exit a parse tree produced by the `showCatalogs`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;

	/**
	 * Enter a parse tree produced by the `showColumns`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowColumns?: (ctx: ShowColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `showColumns`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowColumns?: (ctx: ShowColumnsContext) => void;

	/**
	 * Enter a parse tree produced by the `showStats`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowStats?: (ctx: ShowStatsContext) => void;
	/**
	 * Exit a parse tree produced by the `showStats`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowStats?: (ctx: ShowStatsContext) => void;

	/**
	 * Enter a parse tree produced by the `showStatsForQuery`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `showStatsForQuery`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `showRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowRoles?: (ctx: ShowRolesContext) => void;
	/**
	 * Exit a parse tree produced by the `showRoles`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowRoles?: (ctx: ShowRolesContext) => void;

	/**
	 * Enter a parse tree produced by the `showRoleGrants`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
	/**
	 * Exit a parse tree produced by the `showRoleGrants`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;

	/**
	 * Enter a parse tree produced by the `showFunctions`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `showFunctions`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowFunctions?: (ctx: ShowFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `showSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowSession?: (ctx: ShowSessionContext) => void;
	/**
	 * Exit a parse tree produced by the `showSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowSession?: (ctx: ShowSessionContext) => void;

	/**
	 * Enter a parse tree produced by the `setSessionAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetSessionAuthorization?: (ctx: SetSessionAuthorizationContext) => void;
	/**
	 * Exit a parse tree produced by the `setSessionAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetSessionAuthorization?: (ctx: SetSessionAuthorizationContext) => void;

	/**
	 * Enter a parse tree produced by the `resetSessionAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterResetSessionAuthorization?: (ctx: ResetSessionAuthorizationContext) => void;
	/**
	 * Exit a parse tree produced by the `resetSessionAuthorization`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitResetSessionAuthorization?: (ctx: ResetSessionAuthorizationContext) => void;

	/**
	 * Enter a parse tree produced by the `setSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetSession?: (ctx: SetSessionContext) => void;
	/**
	 * Exit a parse tree produced by the `setSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetSession?: (ctx: SetSessionContext) => void;

	/**
	 * Enter a parse tree produced by the `resetSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterResetSession?: (ctx: ResetSessionContext) => void;
	/**
	 * Exit a parse tree produced by the `resetSession`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitResetSession?: (ctx: ResetSessionContext) => void;

	/**
	 * Enter a parse tree produced by the `startTransaction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStartTransaction?: (ctx: StartTransactionContext) => void;
	/**
	 * Exit a parse tree produced by the `startTransaction`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStartTransaction?: (ctx: StartTransactionContext) => void;

	/**
	 * Enter a parse tree produced by the `commit`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommit?: (ctx: CommitContext) => void;
	/**
	 * Exit a parse tree produced by the `commit`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommit?: (ctx: CommitContext) => void;

	/**
	 * Enter a parse tree produced by the `rollback`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRollback?: (ctx: RollbackContext) => void;
	/**
	 * Exit a parse tree produced by the `rollback`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRollback?: (ctx: RollbackContext) => void;

	/**
	 * Enter a parse tree produced by the `prepare`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterPrepare?: (ctx: PrepareContext) => void;
	/**
	 * Exit a parse tree produced by the `prepare`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitPrepare?: (ctx: PrepareContext) => void;

	/**
	 * Enter a parse tree produced by the `deallocate`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeallocate?: (ctx: DeallocateContext) => void;
	/**
	 * Exit a parse tree produced by the `deallocate`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeallocate?: (ctx: DeallocateContext) => void;

	/**
	 * Enter a parse tree produced by the `execute`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExecute?: (ctx: ExecuteContext) => void;
	/**
	 * Exit a parse tree produced by the `execute`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExecute?: (ctx: ExecuteContext) => void;

	/**
	 * Enter a parse tree produced by the `executeImmediate`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExecuteImmediate?: (ctx: ExecuteImmediateContext) => void;
	/**
	 * Exit a parse tree produced by the `executeImmediate`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExecuteImmediate?: (ctx: ExecuteImmediateContext) => void;

	/**
	 * Enter a parse tree produced by the `describeInput`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeInput?: (ctx: DescribeInputContext) => void;
	/**
	 * Exit a parse tree produced by the `describeInput`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeInput?: (ctx: DescribeInputContext) => void;

	/**
	 * Enter a parse tree produced by the `describeOutput`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeOutput?: (ctx: DescribeOutputContext) => void;
	/**
	 * Exit a parse tree produced by the `describeOutput`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeOutput?: (ctx: DescribeOutputContext) => void;

	/**
	 * Enter a parse tree produced by the `setPath`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetPath?: (ctx: SetPathContext) => void;
	/**
	 * Exit a parse tree produced by the `setPath`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetPath?: (ctx: SetPathContext) => void;

	/**
	 * Enter a parse tree produced by the `setTimeZone`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTimeZone?: (ctx: SetTimeZoneContext) => void;
	/**
	 * Exit a parse tree produced by the `setTimeZone`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTimeZone?: (ctx: SetTimeZoneContext) => void;

	/**
	 * Enter a parse tree produced by the `update`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUpdate?: (ctx: UpdateContext) => void;
	/**
	 * Exit a parse tree produced by the `update`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUpdate?: (ctx: UpdateContext) => void;

	/**
	 * Enter a parse tree produced by the `merge`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterMerge?: (ctx: MergeContext) => void;
	/**
	 * Exit a parse tree produced by the `merge`
	 * labeled alternative in `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitMerge?: (ctx: MergeContext) => void;

	/**
	 * Enter a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
	/**
	 * Exit a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;

	/**
	 * Enter a parse tree produced by the `timeZoneString`
	 * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneString?: (ctx: TimeZoneStringContext) => void;
	/**
	 * Exit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneString?: (ctx: TimeZoneStringContext) => void;

	/**
	 * Enter a parse tree produced by the `isolationLevel`
	 * labeled alternative in `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
	/**
	 * Exit a parse tree produced by the `isolationLevel`
	 * labeled alternative in `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitIsolationLevel?: (ctx: IsolationLevelContext) => void;

	/**
	 * Enter a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Exit a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `and`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by the `and`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;

	/**
	 * Enter a parse tree produced by the `or`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by the `or`
	 * labeled alternative in `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleStatement?: (ctx: SingleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleStatement?: (ctx: SingleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.standaloneExpression`.
	 * @param ctx the parse tree
	 */
	enterStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.standaloneExpression`.
	 * @param ctx the parse tree
	 */
	exitStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.standalonePathSpecification`.
	 * @param ctx the parse tree
	 */
	enterStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.standalonePathSpecification`.
	 * @param ctx the parse tree
	 */
	exitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.standaloneType`.
	 * @param ctx the parse tree
	 */
	enterStandaloneType?: (ctx: StandaloneTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.standaloneType`.
	 * @param ctx the parse tree
	 */
	exitStandaloneType?: (ctx: StandaloneTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.standaloneRowPattern`.
	 * @param ctx the parse tree
	 */
	enterStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.standaloneRowPattern`.
	 * @param ctx the parse tree
	 */
	exitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.standaloneFunctionSpecification`.
	 * @param ctx the parse tree
	 */
	enterStandaloneFunctionSpecification?: (ctx: StandaloneFunctionSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.standaloneFunctionSpecification`.
	 * @param ctx the parse tree
	 */
	exitStandaloneFunctionSpecification?: (ctx: StandaloneFunctionSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.rootQuery`.
	 * @param ctx the parse tree
	 */
	enterRootQuery?: (ctx: RootQueryContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.rootQuery`.
	 * @param ctx the parse tree
	 */
	exitRootQuery?: (ctx: RootQueryContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.withFunction`.
	 * @param ctx the parse tree
	 */
	enterWithFunction?: (ctx: WithFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.withFunction`.
	 * @param ctx the parse tree
	 */
	exitWithFunction?: (ctx: WithFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.with`.
	 * @param ctx the parse tree
	 */
	enterWith?: (ctx: WithContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.with`.
	 * @param ctx the parse tree
	 */
	exitWith?: (ctx: WithContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.tableElement`.
	 * @param ctx the parse tree
	 */
	enterTableElement?: (ctx: TableElementContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.tableElement`.
	 * @param ctx the parse tree
	 */
	exitTableElement?: (ctx: TableElementContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.likeClause`.
	 * @param ctx the parse tree
	 */
	enterLikeClause?: (ctx: LikeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.likeClause`.
	 * @param ctx the parse tree
	 */
	exitLikeClause?: (ctx: LikeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.properties`.
	 * @param ctx the parse tree
	 */
	enterProperties?: (ctx: PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.properties`.
	 * @param ctx the parse tree
	 */
	exitProperties?: (ctx: PropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.propertyAssignments`.
	 * @param ctx the parse tree
	 */
	enterPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.propertyAssignments`.
	 * @param ctx the parse tree
	 */
	exitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterPropertyValue?: (ctx: PropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitPropertyValue?: (ctx: PropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	exitQueryNoWith?: (ctx: QueryNoWithContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.limitRowCount`.
	 * @param ctx the parse tree
	 */
	enterLimitRowCount?: (ctx: LimitRowCountContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.limitRowCount`.
	 * @param ctx the parse tree
	 */
	exitLimitRowCount?: (ctx: LimitRowCountContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.rowCount`.
	 * @param ctx the parse tree
	 */
	enterRowCount?: (ctx: RowCountContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.rowCount`.
	 * @param ctx the parse tree
	 */
	exitRowCount?: (ctx: RowCountContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTerm?: (ctx: QueryTermContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTerm?: (ctx: QueryTermContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.groupBy`.
	 * @param ctx the parse tree
	 */
	enterGroupBy?: (ctx: GroupByContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.groupBy`.
	 * @param ctx the parse tree
	 */
	exitGroupBy?: (ctx: GroupByContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitGroupingElement?: (ctx: GroupingElementContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	enterGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	exitGroupingSet?: (ctx: GroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.windowDefinition`.
	 * @param ctx the parse tree
	 */
	enterWindowDefinition?: (ctx: WindowDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.windowDefinition`.
	 * @param ctx the parse tree
	 */
	exitWindowDefinition?: (ctx: WindowDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.windowSpecification`.
	 * @param ctx the parse tree
	 */
	enterWindowSpecification?: (ctx: WindowSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.windowSpecification`.
	 * @param ctx the parse tree
	 */
	exitWindowSpecification?: (ctx: WindowSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	enterNamedQuery?: (ctx: NamedQueryContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	exitNamedQuery?: (ctx: NamedQueryContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.sampledRelation`.
	 * @param ctx the parse tree
	 */
	enterSampledRelation?: (ctx: SampledRelationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.sampledRelation`.
	 * @param ctx the parse tree
	 */
	exitSampledRelation?: (ctx: SampledRelationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.sampleType`.
	 * @param ctx the parse tree
	 */
	enterSampleType?: (ctx: SampleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.sampleType`.
	 * @param ctx the parse tree
	 */
	exitSampleType?: (ctx: SampleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.trimsSpecification`.
	 * @param ctx the parse tree
	 */
	enterTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.trimsSpecification`.
	 * @param ctx the parse tree
	 */
	exitTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.listAggOverflowBehavior`.
	 * @param ctx the parse tree
	 */
	enterListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.listAggOverflowBehavior`.
	 * @param ctx the parse tree
	 */
	exitListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.listaggCountIndication`.
	 * @param ctx the parse tree
	 */
	enterListaggCountIndication?: (ctx: ListaggCountIndicationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.listaggCountIndication`.
	 * @param ctx the parse tree
	 */
	exitListaggCountIndication?: (ctx: ListaggCountIndicationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.patternRecognition`.
	 * @param ctx the parse tree
	 */
	enterPatternRecognition?: (ctx: PatternRecognitionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.patternRecognition`.
	 * @param ctx the parse tree
	 */
	exitPatternRecognition?: (ctx: PatternRecognitionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.measureDefinition`.
	 * @param ctx the parse tree
	 */
	enterMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.measureDefinition`.
	 * @param ctx the parse tree
	 */
	exitMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.rowsPerMatch`.
	 * @param ctx the parse tree
	 */
	enterRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.rowsPerMatch`.
	 * @param ctx the parse tree
	 */
	exitRowsPerMatch?: (ctx: RowsPerMatchContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.emptyMatchHandling`.
	 * @param ctx the parse tree
	 */
	enterEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.emptyMatchHandling`.
	 * @param ctx the parse tree
	 */
	exitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.skipTo`.
	 * @param ctx the parse tree
	 */
	enterSkipTo?: (ctx: SkipToContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.skipTo`.
	 * @param ctx the parse tree
	 */
	exitSkipTo?: (ctx: SkipToContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.subsetDefinition`.
	 * @param ctx the parse tree
	 */
	enterSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.subsetDefinition`.
	 * @param ctx the parse tree
	 */
	exitSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.variableDefinition`.
	 * @param ctx the parse tree
	 */
	enterVariableDefinition?: (ctx: VariableDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.variableDefinition`.
	 * @param ctx the parse tree
	 */
	exitVariableDefinition?: (ctx: VariableDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.aliasedRelation`.
	 * @param ctx the parse tree
	 */
	exitAliasedRelation?: (ctx: AliasedRelationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	exitColumnAliases?: (ctx: ColumnAliasesContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	enterJsonTableColumn?: (ctx: JsonTableColumnContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonTableColumn`.
	 * @param ctx the parse tree
	 */
	exitJsonTableColumn?: (ctx: JsonTableColumnContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	enterJsonTableSpecificPlan?: (ctx: JsonTableSpecificPlanContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonTableSpecificPlan`.
	 * @param ctx the parse tree
	 */
	exitJsonTableSpecificPlan?: (ctx: JsonTableSpecificPlanContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonTablePathName`.
	 * @param ctx the parse tree
	 */
	enterJsonTablePathName?: (ctx: JsonTablePathNameContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonTablePathName`.
	 * @param ctx the parse tree
	 */
	exitJsonTablePathName?: (ctx: JsonTablePathNameContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.planPrimary`.
	 * @param ctx the parse tree
	 */
	enterPlanPrimary?: (ctx: PlanPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.planPrimary`.
	 * @param ctx the parse tree
	 */
	exitPlanPrimary?: (ctx: PlanPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonTableDefaultPlan`.
	 * @param ctx the parse tree
	 */
	enterJsonTableDefaultPlan?: (ctx: JsonTableDefaultPlanContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonTableDefaultPlan`.
	 * @param ctx the parse tree
	 */
	exitJsonTableDefaultPlan?: (ctx: JsonTableDefaultPlanContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.tableFunctionCall`.
	 * @param ctx the parse tree
	 */
	enterTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.tableFunctionCall`.
	 * @param ctx the parse tree
	 */
	exitTableFunctionCall?: (ctx: TableFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.tableFunctionArgument`.
	 * @param ctx the parse tree
	 */
	enterTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.tableFunctionArgument`.
	 * @param ctx the parse tree
	 */
	exitTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.tableArgument`.
	 * @param ctx the parse tree
	 */
	enterTableArgument?: (ctx: TableArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.tableArgument`.
	 * @param ctx the parse tree
	 */
	exitTableArgument?: (ctx: TableArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	enterTableArgumentRelation?: (ctx: TableArgumentRelationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.tableArgumentRelation`.
	 * @param ctx the parse tree
	 */
	exitTableArgumentRelation?: (ctx: TableArgumentRelationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.descriptorArgument`.
	 * @param ctx the parse tree
	 */
	enterDescriptorArgument?: (ctx: DescriptorArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.descriptorArgument`.
	 * @param ctx the parse tree
	 */
	exitDescriptorArgument?: (ctx: DescriptorArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.descriptorField`.
	 * @param ctx the parse tree
	 */
	enterDescriptorField?: (ctx: DescriptorFieldContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.descriptorField`.
	 * @param ctx the parse tree
	 */
	exitDescriptorField?: (ctx: DescriptorFieldContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.copartitionTables`.
	 * @param ctx the parse tree
	 */
	enterCopartitionTables?: (ctx: CopartitionTablesContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.copartitionTables`.
	 * @param ctx the parse tree
	 */
	exitCopartitionTables?: (ctx: CopartitionTablesContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonPathInvocation`.
	 * @param ctx the parse tree
	 */
	enterJsonPathInvocation?: (ctx: JsonPathInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonPathInvocation`.
	 * @param ctx the parse tree
	 */
	exitJsonPathInvocation?: (ctx: JsonPathInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonValueExpression`.
	 * @param ctx the parse tree
	 */
	enterJsonValueExpression?: (ctx: JsonValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonValueExpression`.
	 * @param ctx the parse tree
	 */
	exitJsonValueExpression?: (ctx: JsonValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonRepresentation`.
	 * @param ctx the parse tree
	 */
	enterJsonRepresentation?: (ctx: JsonRepresentationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonRepresentation`.
	 * @param ctx the parse tree
	 */
	exitJsonRepresentation?: (ctx: JsonRepresentationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonArgument`.
	 * @param ctx the parse tree
	 */
	enterJsonArgument?: (ctx: JsonArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonArgument`.
	 * @param ctx the parse tree
	 */
	exitJsonArgument?: (ctx: JsonArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonExistsErrorBehavior`.
	 * @param ctx the parse tree
	 */
	enterJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonExistsErrorBehavior`.
	 * @param ctx the parse tree
	 */
	exitJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonValueBehavior`.
	 * @param ctx the parse tree
	 */
	enterJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonValueBehavior`.
	 * @param ctx the parse tree
	 */
	exitJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonQueryWrapperBehavior`.
	 * @param ctx the parse tree
	 */
	enterJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonQueryWrapperBehavior`.
	 * @param ctx the parse tree
	 */
	exitJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonQueryBehavior`.
	 * @param ctx the parse tree
	 */
	enterJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonQueryBehavior`.
	 * @param ctx the parse tree
	 */
	exitJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.jsonObjectMember`.
	 * @param ctx the parse tree
	 */
	enterJsonObjectMember?: (ctx: JsonObjectMemberContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.jsonObjectMember`.
	 * @param ctx the parse tree
	 */
	exitJsonObjectMember?: (ctx: JsonObjectMemberContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.processingMode`.
	 * @param ctx the parse tree
	 */
	enterProcessingMode?: (ctx: ProcessingModeContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.processingMode`.
	 * @param ctx the parse tree
	 */
	exitProcessingMode?: (ctx: ProcessingModeContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.nullTreatment`.
	 * @param ctx the parse tree
	 */
	enterNullTreatment?: (ctx: NullTreatmentContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.nullTreatment`.
	 * @param ctx the parse tree
	 */
	exitNullTreatment?: (ctx: NullTreatmentContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneSpecifier?: (ctx: TimeZoneSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneSpecifier?: (ctx: TimeZoneSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 */
	enterComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 */
	exitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.intervalField`.
	 * @param ctx the parse tree
	 */
	enterIntervalField?: (ctx: IntervalFieldContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.intervalField`.
	 * @param ctx the parse tree
	 */
	exitIntervalField?: (ctx: IntervalFieldContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.normalForm`.
	 * @param ctx the parse tree
	 */
	enterNormalForm?: (ctx: NormalFormContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.normalForm`.
	 * @param ctx the parse tree
	 */
	exitNormalForm?: (ctx: NormalFormContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.rowField`.
	 * @param ctx the parse tree
	 */
	enterRowField?: (ctx: RowFieldContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.rowField`.
	 * @param ctx the parse tree
	 */
	exitRowField?: (ctx: RowFieldContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.filter`.
	 * @param ctx the parse tree
	 */
	enterFilter?: (ctx: FilterContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.filter`.
	 * @param ctx the parse tree
	 */
	exitFilter?: (ctx: FilterContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	enterMergeCase?: (ctx: MergeCaseContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.mergeCase`.
	 * @param ctx the parse tree
	 */
	exitMergeCase?: (ctx: MergeCaseContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.over`.
	 * @param ctx the parse tree
	 */
	enterOver?: (ctx: OverContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.over`.
	 * @param ctx the parse tree
	 */
	exitOver?: (ctx: OverContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.frameExtent`.
	 * @param ctx the parse tree
	 */
	enterFrameExtent?: (ctx: FrameExtentContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.frameExtent`.
	 * @param ctx the parse tree
	 */
	exitFrameExtent?: (ctx: FrameExtentContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterFrameBound?: (ctx: FrameBoundContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitFrameBound?: (ctx: FrameBoundContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	enterRowPattern?: (ctx: RowPatternContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.rowPattern`.
	 * @param ctx the parse tree
	 */
	exitRowPattern?: (ctx: RowPatternContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	enterPatternPrimary?: (ctx: PatternPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.patternPrimary`.
	 * @param ctx the parse tree
	 */
	exitPatternPrimary?: (ctx: PatternPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	enterPatternQuantifier?: (ctx: PatternQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.patternQuantifier`.
	 * @param ctx the parse tree
	 */
	exitPatternQuantifier?: (ctx: PatternQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.updateAssignment`.
	 * @param ctx the parse tree
	 */
	enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.updateAssignment`.
	 * @param ctx the parse tree
	 */
	exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 */
	enterExplainOption?: (ctx: ExplainOptionContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.explainOption`.
	 * @param ctx the parse tree
	 */
	exitExplainOption?: (ctx: ExplainOptionContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionMode?: (ctx: TransactionModeContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionMode?: (ctx: TransactionModeContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 */
	enterCallArgument?: (ctx: CallArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.callArgument`.
	 * @param ctx the parse tree
	 */
	exitCallArgument?: (ctx: CallArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterPathElement?: (ctx: PathElementContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitPathElement?: (ctx: PathElementContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.pathSpecification`.
	 * @param ctx the parse tree
	 */
	enterPathSpecification?: (ctx: PathSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.pathSpecification`.
	 * @param ctx the parse tree
	 */
	exitPathSpecification?: (ctx: PathSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.functionSpecification`.
	 * @param ctx the parse tree
	 */
	enterFunctionSpecification?: (ctx: FunctionSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.functionSpecification`.
	 * @param ctx the parse tree
	 */
	exitFunctionSpecification?: (ctx: FunctionSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.returnsClause`.
	 * @param ctx the parse tree
	 */
	enterReturnsClause?: (ctx: ReturnsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.returnsClause`.
	 * @param ctx the parse tree
	 */
	exitReturnsClause?: (ctx: ReturnsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterRoutineCharacteristic?: (ctx: RoutineCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.routineCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitRoutineCharacteristic?: (ctx: RoutineCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	enterControlStatement?: (ctx: ControlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.controlStatement`.
	 * @param ctx the parse tree
	 */
	exitControlStatement?: (ctx: ControlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.caseStatementWhenClause`.
	 * @param ctx the parse tree
	 */
	enterCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.caseStatementWhenClause`.
	 * @param ctx the parse tree
	 */
	exitCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.elseIfClause`.
	 * @param ctx the parse tree
	 */
	enterElseIfClause?: (ctx: ElseIfClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.elseIfClause`.
	 * @param ctx the parse tree
	 */
	exitElseIfClause?: (ctx: ElseIfClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.elseClause`.
	 * @param ctx the parse tree
	 */
	enterElseClause?: (ctx: ElseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.elseClause`.
	 * @param ctx the parse tree
	 */
	exitElseClause?: (ctx: ElseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.sqlStatementList`.
	 * @param ctx the parse tree
	 */
	enterSqlStatementList?: (ctx: SqlStatementListContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.sqlStatementList`.
	 * @param ctx the parse tree
	 */
	exitSqlStatementList?: (ctx: SqlStatementListContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.privilege`.
	 * @param ctx the parse tree
	 */
	enterPrivilege?: (ctx: PrivilegeContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.privilege`.
	 * @param ctx the parse tree
	 */
	exitPrivilege?: (ctx: PrivilegeContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.entityKind`.
	 * @param ctx the parse tree
	 */
	enterEntityKind?: (ctx: EntityKindContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.entityKind`.
	 * @param ctx the parse tree
	 */
	exitEntityKind?: (ctx: EntityKindContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.grantObject`.
	 * @param ctx the parse tree
	 */
	enterGrantObject?: (ctx: GrantObjectContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.grantObject`.
	 * @param ctx the parse tree
	 */
	exitGrantObject?: (ctx: GrantObjectContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.queryPeriod`.
	 * @param ctx the parse tree
	 */
	enterQueryPeriod?: (ctx: QueryPeriodContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.queryPeriod`.
	 * @param ctx the parse tree
	 */
	exitQueryPeriod?: (ctx: QueryPeriodContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.rangeType`.
	 * @param ctx the parse tree
	 */
	enterRangeType?: (ctx: RangeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.rangeType`.
	 * @param ctx the parse tree
	 */
	exitRangeType?: (ctx: RangeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 */
	enterGrantor?: (ctx: GrantorContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.grantor`.
	 * @param ctx the parse tree
	 */
	exitGrantor?: (ctx: GrantorContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 */
	enterPrincipal?: (ctx: PrincipalContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.principal`.
	 * @param ctx the parse tree
	 */
	exitPrincipal?: (ctx: PrincipalContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.roles`.
	 * @param ctx the parse tree
	 */
	enterRoles?: (ctx: RolesContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.roles`.
	 * @param ctx the parse tree
	 */
	exitRoles?: (ctx: RolesContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.privilegeOrRole`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeOrRole?: (ctx: PrivilegeOrRoleContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.privilegeOrRole`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeOrRole?: (ctx: PrivilegeOrRoleContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 */
	enterAuthorizationUser?: (ctx: AuthorizationUserContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.authorizationUser`.
	 * @param ctx the parse tree
	 */
	exitAuthorizationUser?: (ctx: AuthorizationUserContext) => void;

	/**
	 * Enter a parse tree produced by `TrinoSQLParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `TrinoSQLParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
}

