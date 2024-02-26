// Generated from ./TrinoSQL.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SingleStatementContext } from "./TrinoSQLParser.js";
import { StandaloneExpressionContext } from "./TrinoSQLParser.js";
import { StandalonePathSpecificationContext } from "./TrinoSQLParser.js";
import { StandaloneTypeContext } from "./TrinoSQLParser.js";
import { StandaloneRowPatternContext } from "./TrinoSQLParser.js";
import { StandaloneFunctionSpecificationContext } from "./TrinoSQLParser.js";
import { StatementDefaultContext } from "./TrinoSQLParser.js";
import { UseContext } from "./TrinoSQLParser.js";
import { CreateCatalogContext } from "./TrinoSQLParser.js";
import { DropCatalogContext } from "./TrinoSQLParser.js";
import { CreateSchemaContext } from "./TrinoSQLParser.js";
import { DropSchemaContext } from "./TrinoSQLParser.js";
import { RenameSchemaContext } from "./TrinoSQLParser.js";
import { SetSchemaAuthorizationContext } from "./TrinoSQLParser.js";
import { CreateTableAsSelectContext } from "./TrinoSQLParser.js";
import { CreateTableContext } from "./TrinoSQLParser.js";
import { DropTableContext } from "./TrinoSQLParser.js";
import { InsertIntoContext } from "./TrinoSQLParser.js";
import { DeleteContext } from "./TrinoSQLParser.js";
import { TruncateTableContext } from "./TrinoSQLParser.js";
import { CommentTableContext } from "./TrinoSQLParser.js";
import { CommentViewContext } from "./TrinoSQLParser.js";
import { CommentColumnContext } from "./TrinoSQLParser.js";
import { RenameTableContext } from "./TrinoSQLParser.js";
import { AddColumnContext } from "./TrinoSQLParser.js";
import { RenameColumnContext } from "./TrinoSQLParser.js";
import { DropColumnContext } from "./TrinoSQLParser.js";
import { SetColumnTypeContext } from "./TrinoSQLParser.js";
import { DropNotNullConstraintContext } from "./TrinoSQLParser.js";
import { SetTableAuthorizationContext } from "./TrinoSQLParser.js";
import { SetTablePropertiesContext } from "./TrinoSQLParser.js";
import { TableExecuteContext } from "./TrinoSQLParser.js";
import { AnalyzeContext } from "./TrinoSQLParser.js";
import { CreateMaterializedViewContext } from "./TrinoSQLParser.js";
import { CreateViewContext } from "./TrinoSQLParser.js";
import { RefreshMaterializedViewContext } from "./TrinoSQLParser.js";
import { DropMaterializedViewContext } from "./TrinoSQLParser.js";
import { RenameMaterializedViewContext } from "./TrinoSQLParser.js";
import { SetMaterializedViewPropertiesContext } from "./TrinoSQLParser.js";
import { DropViewContext } from "./TrinoSQLParser.js";
import { RenameViewContext } from "./TrinoSQLParser.js";
import { SetViewAuthorizationContext } from "./TrinoSQLParser.js";
import { CallContext } from "./TrinoSQLParser.js";
import { CreateFunctionContext } from "./TrinoSQLParser.js";
import { DropFunctionContext } from "./TrinoSQLParser.js";
import { CreateRoleContext } from "./TrinoSQLParser.js";
import { DropRoleContext } from "./TrinoSQLParser.js";
import { GrantRolesContext } from "./TrinoSQLParser.js";
import { GrantPrivilegesContext } from "./TrinoSQLParser.js";
import { RevokeRolesContext } from "./TrinoSQLParser.js";
import { RevokePrivilegesContext } from "./TrinoSQLParser.js";
import { DenyContext } from "./TrinoSQLParser.js";
import { SetRoleContext } from "./TrinoSQLParser.js";
import { ShowGrantsContext } from "./TrinoSQLParser.js";
import { ExplainContext } from "./TrinoSQLParser.js";
import { ExplainAnalyzeContext } from "./TrinoSQLParser.js";
import { ShowCreateTableContext } from "./TrinoSQLParser.js";
import { ShowCreateSchemaContext } from "./TrinoSQLParser.js";
import { ShowCreateViewContext } from "./TrinoSQLParser.js";
import { ShowCreateMaterializedViewContext } from "./TrinoSQLParser.js";
import { ShowTablesContext } from "./TrinoSQLParser.js";
import { ShowSchemasContext } from "./TrinoSQLParser.js";
import { ShowCatalogsContext } from "./TrinoSQLParser.js";
import { ShowColumnsContext } from "./TrinoSQLParser.js";
import { ShowStatsContext } from "./TrinoSQLParser.js";
import { ShowStatsForQueryContext } from "./TrinoSQLParser.js";
import { ShowRolesContext } from "./TrinoSQLParser.js";
import { ShowRoleGrantsContext } from "./TrinoSQLParser.js";
import { ShowFunctionsContext } from "./TrinoSQLParser.js";
import { ShowSessionContext } from "./TrinoSQLParser.js";
import { SetSessionAuthorizationContext } from "./TrinoSQLParser.js";
import { ResetSessionAuthorizationContext } from "./TrinoSQLParser.js";
import { SetSessionContext } from "./TrinoSQLParser.js";
import { ResetSessionContext } from "./TrinoSQLParser.js";
import { StartTransactionContext } from "./TrinoSQLParser.js";
import { CommitContext } from "./TrinoSQLParser.js";
import { RollbackContext } from "./TrinoSQLParser.js";
import { PrepareContext } from "./TrinoSQLParser.js";
import { DeallocateContext } from "./TrinoSQLParser.js";
import { ExecuteContext } from "./TrinoSQLParser.js";
import { ExecuteImmediateContext } from "./TrinoSQLParser.js";
import { DescribeInputContext } from "./TrinoSQLParser.js";
import { DescribeOutputContext } from "./TrinoSQLParser.js";
import { SetPathContext } from "./TrinoSQLParser.js";
import { SetTimeZoneContext } from "./TrinoSQLParser.js";
import { UpdateContext } from "./TrinoSQLParser.js";
import { MergeContext } from "./TrinoSQLParser.js";
import { RootQueryContext } from "./TrinoSQLParser.js";
import { WithFunctionContext } from "./TrinoSQLParser.js";
import { QueryContext } from "./TrinoSQLParser.js";
import { WithContext } from "./TrinoSQLParser.js";
import { TableElementContext } from "./TrinoSQLParser.js";
import { ColumnDefinitionContext } from "./TrinoSQLParser.js";
import { LikeClauseContext } from "./TrinoSQLParser.js";
import { PropertiesContext } from "./TrinoSQLParser.js";
import { PropertyAssignmentsContext } from "./TrinoSQLParser.js";
import { PropertyContext } from "./TrinoSQLParser.js";
import { DefaultPropertyValueContext } from "./TrinoSQLParser.js";
import { NonDefaultPropertyValueContext } from "./TrinoSQLParser.js";
import { QueryNoWithContext } from "./TrinoSQLParser.js";
import { LimitRowCountContext } from "./TrinoSQLParser.js";
import { RowCountContext } from "./TrinoSQLParser.js";
import { QueryTermDefaultContext } from "./TrinoSQLParser.js";
import { SetOperationContext } from "./TrinoSQLParser.js";
import { QueryPrimaryDefaultContext } from "./TrinoSQLParser.js";
import { TableContext } from "./TrinoSQLParser.js";
import { InlineTableContext } from "./TrinoSQLParser.js";
import { SubqueryContext } from "./TrinoSQLParser.js";
import { SortItemContext } from "./TrinoSQLParser.js";
import { QuerySpecificationContext } from "./TrinoSQLParser.js";
import { GroupByContext } from "./TrinoSQLParser.js";
import { SingleGroupingSetContext } from "./TrinoSQLParser.js";
import { RollupContext } from "./TrinoSQLParser.js";
import { CubeContext } from "./TrinoSQLParser.js";
import { MultipleGroupingSetsContext } from "./TrinoSQLParser.js";
import { GroupingSetContext } from "./TrinoSQLParser.js";
import { WindowDefinitionContext } from "./TrinoSQLParser.js";
import { WindowSpecificationContext } from "./TrinoSQLParser.js";
import { NamedQueryContext } from "./TrinoSQLParser.js";
import { SetQuantifierContext } from "./TrinoSQLParser.js";
import { SelectSingleContext } from "./TrinoSQLParser.js";
import { SelectAllContext } from "./TrinoSQLParser.js";
import { RelationDefaultContext } from "./TrinoSQLParser.js";
import { JoinRelationContext } from "./TrinoSQLParser.js";
import { JoinTypeContext } from "./TrinoSQLParser.js";
import { JoinCriteriaContext } from "./TrinoSQLParser.js";
import { SampledRelationContext } from "./TrinoSQLParser.js";
import { SampleTypeContext } from "./TrinoSQLParser.js";
import { TrimsSpecificationContext } from "./TrinoSQLParser.js";
import { ListAggOverflowBehaviorContext } from "./TrinoSQLParser.js";
import { ListaggCountIndicationContext } from "./TrinoSQLParser.js";
import { PatternRecognitionContext } from "./TrinoSQLParser.js";
import { MeasureDefinitionContext } from "./TrinoSQLParser.js";
import { RowsPerMatchContext } from "./TrinoSQLParser.js";
import { EmptyMatchHandlingContext } from "./TrinoSQLParser.js";
import { SkipToContext } from "./TrinoSQLParser.js";
import { SubsetDefinitionContext } from "./TrinoSQLParser.js";
import { VariableDefinitionContext } from "./TrinoSQLParser.js";
import { AliasedRelationContext } from "./TrinoSQLParser.js";
import { ColumnAliasesContext } from "./TrinoSQLParser.js";
import { TableNameContext } from "./TrinoSQLParser.js";
import { SubqueryRelationContext } from "./TrinoSQLParser.js";
import { UnnestContext } from "./TrinoSQLParser.js";
import { LateralContext } from "./TrinoSQLParser.js";
import { TableFunctionInvocationContext } from "./TrinoSQLParser.js";
import { ParenthesizedRelationContext } from "./TrinoSQLParser.js";
import { JsonTableContext } from "./TrinoSQLParser.js";
import { OrdinalityColumnContext } from "./TrinoSQLParser.js";
import { ValueColumnContext } from "./TrinoSQLParser.js";
import { QueryColumnContext } from "./TrinoSQLParser.js";
import { NestedColumnsContext } from "./TrinoSQLParser.js";
import { LeafPlanContext } from "./TrinoSQLParser.js";
import { JoinPlanContext } from "./TrinoSQLParser.js";
import { UnionPlanContext } from "./TrinoSQLParser.js";
import { CrossPlanContext } from "./TrinoSQLParser.js";
import { JsonTablePathNameContext } from "./TrinoSQLParser.js";
import { PlanPrimaryContext } from "./TrinoSQLParser.js";
import { JsonTableDefaultPlanContext } from "./TrinoSQLParser.js";
import { TableFunctionCallContext } from "./TrinoSQLParser.js";
import { TableFunctionArgumentContext } from "./TrinoSQLParser.js";
import { TableArgumentContext } from "./TrinoSQLParser.js";
import { TableArgumentTableContext } from "./TrinoSQLParser.js";
import { TableArgumentQueryContext } from "./TrinoSQLParser.js";
import { DescriptorArgumentContext } from "./TrinoSQLParser.js";
import { DescriptorFieldContext } from "./TrinoSQLParser.js";
import { CopartitionTablesContext } from "./TrinoSQLParser.js";
import { ExpressionContext } from "./TrinoSQLParser.js";
import { LogicalNotContext } from "./TrinoSQLParser.js";
import { PredicatedContext } from "./TrinoSQLParser.js";
import { OrContext } from "./TrinoSQLParser.js";
import { AndContext } from "./TrinoSQLParser.js";
import { ComparisonContext } from "./TrinoSQLParser.js";
import { QuantifiedComparisonContext } from "./TrinoSQLParser.js";
import { BetweenContext } from "./TrinoSQLParser.js";
import { InListContext } from "./TrinoSQLParser.js";
import { InSubqueryContext } from "./TrinoSQLParser.js";
import { LikeContext } from "./TrinoSQLParser.js";
import { NullPredicateContext } from "./TrinoSQLParser.js";
import { DistinctFromContext } from "./TrinoSQLParser.js";
import { ValueExpressionDefaultContext } from "./TrinoSQLParser.js";
import { ConcatenationContext } from "./TrinoSQLParser.js";
import { ArithmeticBinaryContext } from "./TrinoSQLParser.js";
import { ArithmeticUnaryContext } from "./TrinoSQLParser.js";
import { AtTimeZoneContext } from "./TrinoSQLParser.js";
import { DereferenceContext } from "./TrinoSQLParser.js";
import { TypeConstructorContext } from "./TrinoSQLParser.js";
import { JsonValueContext } from "./TrinoSQLParser.js";
import { CurrentDateContext } from "./TrinoSQLParser.js";
import { SubstringContext } from "./TrinoSQLParser.js";
import { CastContext } from "./TrinoSQLParser.js";
import { LambdaContext } from "./TrinoSQLParser.js";
import { ParenthesizedExpressionContext } from "./TrinoSQLParser.js";
import { TrimContext } from "./TrinoSQLParser.js";
import { ParameterContext } from "./TrinoSQLParser.js";
import { NormalizeContext } from "./TrinoSQLParser.js";
import { LocalTimestampContext } from "./TrinoSQLParser.js";
import { JsonObjectContext } from "./TrinoSQLParser.js";
import { IntervalLiteralContext } from "./TrinoSQLParser.js";
import { NumericLiteralContext } from "./TrinoSQLParser.js";
import { BooleanLiteralContext } from "./TrinoSQLParser.js";
import { JsonArrayContext } from "./TrinoSQLParser.js";
import { SimpleCaseContext } from "./TrinoSQLParser.js";
import { ColumnReferenceContext } from "./TrinoSQLParser.js";
import { NullLiteralContext } from "./TrinoSQLParser.js";
import { RowConstructorContext } from "./TrinoSQLParser.js";
import { SubscriptContext } from "./TrinoSQLParser.js";
import { JsonExistsContext } from "./TrinoSQLParser.js";
import { CurrentPathContext } from "./TrinoSQLParser.js";
import { SubqueryExpressionContext } from "./TrinoSQLParser.js";
import { BinaryLiteralContext } from "./TrinoSQLParser.js";
import { CurrentTimeContext } from "./TrinoSQLParser.js";
import { LocalTimeContext } from "./TrinoSQLParser.js";
import { CurrentUserContext } from "./TrinoSQLParser.js";
import { JsonQueryContext } from "./TrinoSQLParser.js";
import { MeasureContext } from "./TrinoSQLParser.js";
import { ExtractContext } from "./TrinoSQLParser.js";
import { StringLiteralContext } from "./TrinoSQLParser.js";
import { ArrayConstructorContext } from "./TrinoSQLParser.js";
import { FunctionCallContext } from "./TrinoSQLParser.js";
import { CurrentTimestampContext } from "./TrinoSQLParser.js";
import { CurrentSchemaContext } from "./TrinoSQLParser.js";
import { ExistsContext } from "./TrinoSQLParser.js";
import { PositionContext } from "./TrinoSQLParser.js";
import { ListaggContext } from "./TrinoSQLParser.js";
import { SearchedCaseContext } from "./TrinoSQLParser.js";
import { CurrentCatalogContext } from "./TrinoSQLParser.js";
import { GroupingOperationContext } from "./TrinoSQLParser.js";
import { JsonPathInvocationContext } from "./TrinoSQLParser.js";
import { JsonValueExpressionContext } from "./TrinoSQLParser.js";
import { JsonRepresentationContext } from "./TrinoSQLParser.js";
import { JsonArgumentContext } from "./TrinoSQLParser.js";
import { JsonExistsErrorBehaviorContext } from "./TrinoSQLParser.js";
import { JsonValueBehaviorContext } from "./TrinoSQLParser.js";
import { JsonQueryWrapperBehaviorContext } from "./TrinoSQLParser.js";
import { JsonQueryBehaviorContext } from "./TrinoSQLParser.js";
import { JsonObjectMemberContext } from "./TrinoSQLParser.js";
import { ProcessingModeContext } from "./TrinoSQLParser.js";
import { NullTreatmentContext } from "./TrinoSQLParser.js";
import { BasicStringLiteralContext } from "./TrinoSQLParser.js";
import { UnicodeStringLiteralContext } from "./TrinoSQLParser.js";
import { TimeZoneIntervalContext } from "./TrinoSQLParser.js";
import { TimeZoneStringContext } from "./TrinoSQLParser.js";
import { ComparisonOperatorContext } from "./TrinoSQLParser.js";
import { ComparisonQuantifierContext } from "./TrinoSQLParser.js";
import { BooleanValueContext } from "./TrinoSQLParser.js";
import { IntervalContext } from "./TrinoSQLParser.js";
import { IntervalFieldContext } from "./TrinoSQLParser.js";
import { NormalFormContext } from "./TrinoSQLParser.js";
import { RowTypeContext } from "./TrinoSQLParser.js";
import { IntervalTypeContext } from "./TrinoSQLParser.js";
import { ArrayTypeContext } from "./TrinoSQLParser.js";
import { DoublePrecisionTypeContext } from "./TrinoSQLParser.js";
import { LegacyArrayTypeContext } from "./TrinoSQLParser.js";
import { GenericTypeContext } from "./TrinoSQLParser.js";
import { DateTimeTypeContext } from "./TrinoSQLParser.js";
import { LegacyMapTypeContext } from "./TrinoSQLParser.js";
import { RowFieldContext } from "./TrinoSQLParser.js";
import { TypeParameterContext } from "./TrinoSQLParser.js";
import { WhenClauseContext } from "./TrinoSQLParser.js";
import { FilterContext } from "./TrinoSQLParser.js";
import { MergeUpdateContext } from "./TrinoSQLParser.js";
import { MergeDeleteContext } from "./TrinoSQLParser.js";
import { MergeInsertContext } from "./TrinoSQLParser.js";
import { OverContext } from "./TrinoSQLParser.js";
import { WindowFrameContext } from "./TrinoSQLParser.js";
import { FrameExtentContext } from "./TrinoSQLParser.js";
import { UnboundedFrameContext } from "./TrinoSQLParser.js";
import { CurrentRowBoundContext } from "./TrinoSQLParser.js";
import { BoundedFrameContext } from "./TrinoSQLParser.js";
import { QuantifiedPrimaryContext } from "./TrinoSQLParser.js";
import { PatternConcatenationContext } from "./TrinoSQLParser.js";
import { PatternAlternationContext } from "./TrinoSQLParser.js";
import { PatternVariableContext } from "./TrinoSQLParser.js";
import { EmptyPatternContext } from "./TrinoSQLParser.js";
import { PatternPermutationContext } from "./TrinoSQLParser.js";
import { GroupedPatternContext } from "./TrinoSQLParser.js";
import { PartitionStartAnchorContext } from "./TrinoSQLParser.js";
import { PartitionEndAnchorContext } from "./TrinoSQLParser.js";
import { ExcludedPatternContext } from "./TrinoSQLParser.js";
import { ZeroOrMoreQuantifierContext } from "./TrinoSQLParser.js";
import { OneOrMoreQuantifierContext } from "./TrinoSQLParser.js";
import { ZeroOrOneQuantifierContext } from "./TrinoSQLParser.js";
import { RangeQuantifierContext } from "./TrinoSQLParser.js";
import { UpdateAssignmentContext } from "./TrinoSQLParser.js";
import { ExplainFormatContext } from "./TrinoSQLParser.js";
import { ExplainTypeContext } from "./TrinoSQLParser.js";
import { IsolationLevelContext } from "./TrinoSQLParser.js";
import { TransactionAccessModeContext } from "./TrinoSQLParser.js";
import { ReadUncommittedContext } from "./TrinoSQLParser.js";
import { ReadCommittedContext } from "./TrinoSQLParser.js";
import { RepeatableReadContext } from "./TrinoSQLParser.js";
import { SerializableContext } from "./TrinoSQLParser.js";
import { PositionalArgumentContext } from "./TrinoSQLParser.js";
import { NamedArgumentContext } from "./TrinoSQLParser.js";
import { QualifiedArgumentContext } from "./TrinoSQLParser.js";
import { UnqualifiedArgumentContext } from "./TrinoSQLParser.js";
import { PathSpecificationContext } from "./TrinoSQLParser.js";
import { FunctionSpecificationContext } from "./TrinoSQLParser.js";
import { FunctionDeclarationContext } from "./TrinoSQLParser.js";
import { ParameterDeclarationContext } from "./TrinoSQLParser.js";
import { ReturnsClauseContext } from "./TrinoSQLParser.js";
import { LanguageCharacteristicContext } from "./TrinoSQLParser.js";
import { DeterministicCharacteristicContext } from "./TrinoSQLParser.js";
import { ReturnsNullOnNullInputCharacteristicContext } from "./TrinoSQLParser.js";
import { CalledOnNullInputCharacteristicContext } from "./TrinoSQLParser.js";
import { SecurityCharacteristicContext } from "./TrinoSQLParser.js";
import { CommentCharacteristicContext } from "./TrinoSQLParser.js";
import { ReturnStatementContext } from "./TrinoSQLParser.js";
import { AssignmentStatementContext } from "./TrinoSQLParser.js";
import { SimpleCaseStatementContext } from "./TrinoSQLParser.js";
import { SearchedCaseStatementContext } from "./TrinoSQLParser.js";
import { IfStatementContext } from "./TrinoSQLParser.js";
import { IterateStatementContext } from "./TrinoSQLParser.js";
import { LeaveStatementContext } from "./TrinoSQLParser.js";
import { CompoundStatementContext } from "./TrinoSQLParser.js";
import { LoopStatementContext } from "./TrinoSQLParser.js";
import { WhileStatementContext } from "./TrinoSQLParser.js";
import { RepeatStatementContext } from "./TrinoSQLParser.js";
import { CaseStatementWhenClauseContext } from "./TrinoSQLParser.js";
import { ElseIfClauseContext } from "./TrinoSQLParser.js";
import { ElseClauseContext } from "./TrinoSQLParser.js";
import { VariableDeclarationContext } from "./TrinoSQLParser.js";
import { SqlStatementListContext } from "./TrinoSQLParser.js";
import { PrivilegeContext } from "./TrinoSQLParser.js";
import { EntityKindContext } from "./TrinoSQLParser.js";
import { GrantObjectContext } from "./TrinoSQLParser.js";
import { QualifiedNameContext } from "./TrinoSQLParser.js";
import { QueryPeriodContext } from "./TrinoSQLParser.js";
import { RangeTypeContext } from "./TrinoSQLParser.js";
import { SpecifiedPrincipalContext } from "./TrinoSQLParser.js";
import { CurrentUserGrantorContext } from "./TrinoSQLParser.js";
import { CurrentRoleGrantorContext } from "./TrinoSQLParser.js";
import { UnspecifiedPrincipalContext } from "./TrinoSQLParser.js";
import { UserPrincipalContext } from "./TrinoSQLParser.js";
import { RolePrincipalContext } from "./TrinoSQLParser.js";
import { RolesContext } from "./TrinoSQLParser.js";
import { PrivilegeOrRoleContext } from "./TrinoSQLParser.js";
import { UnquotedIdentifierContext } from "./TrinoSQLParser.js";
import { QuotedIdentifierContext } from "./TrinoSQLParser.js";
import { BackQuotedIdentifierContext } from "./TrinoSQLParser.js";
import { DigitIdentifierContext } from "./TrinoSQLParser.js";
import { DecimalLiteralContext } from "./TrinoSQLParser.js";
import { DoubleLiteralContext } from "./TrinoSQLParser.js";
import { IntegerLiteralContext } from "./TrinoSQLParser.js";
import { IdentifierUserContext } from "./TrinoSQLParser.js";
import { StringUserContext } from "./TrinoSQLParser.js";
import { NonReservedContext } from "./TrinoSQLParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TrinoSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class TrinoSQLVisitor<Result> extends AbstractParseTreeVisitor<Result> {
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
     * Visit a parse tree produced by the `relationDefault`
     * labeled alternative in `TrinoSQLParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationDefault?: (ctx: RelationDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `joinRelation`
     * labeled alternative in `TrinoSQLParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
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
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `or`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOr?: (ctx: OrContext) => Result;
    /**
     * Visit a parse tree produced by the `and`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnd?: (ctx: AndContext) => Result;
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
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `concatenation`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `atTimeZone`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;
    /**
     * Visit a parse tree produced by the `dereference`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `typeConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `jsonValue`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonValue?: (ctx: JsonValueContext) => Result;
    /**
     * Visit a parse tree produced by the `currentDate`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentDate?: (ctx: CurrentDateContext) => Result;
    /**
     * Visit a parse tree produced by the `substring`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstring?: (ctx: SubstringContext) => Result;
    /**
     * Visit a parse tree produced by the `cast`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast?: (ctx: CastContext) => Result;
    /**
     * Visit a parse tree produced by the `lambda`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambda?: (ctx: LambdaContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `trim`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrim?: (ctx: TrimContext) => Result;
    /**
     * Visit a parse tree produced by the `parameter`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by the `normalize`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNormalize?: (ctx: NormalizeContext) => Result;
    /**
     * Visit a parse tree produced by the `localTimestamp`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalTimestamp?: (ctx: LocalTimestampContext) => Result;
    /**
     * Visit a parse tree produced by the `jsonObject`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonObject?: (ctx: JsonObjectContext) => Result;
    /**
     * Visit a parse tree produced by the `intervalLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
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
     * Visit a parse tree produced by the `jsonArray`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonArray?: (ctx: JsonArrayContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleCase`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `nullLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `rowConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowConstructor?: (ctx: RowConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `subscript`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubscript?: (ctx: SubscriptContext) => Result;
    /**
     * Visit a parse tree produced by the `jsonExists`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonExists?: (ctx: JsonExistsContext) => Result;
    /**
     * Visit a parse tree produced by the `currentPath`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentPath?: (ctx: CurrentPathContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `currentTime`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentTime?: (ctx: CurrentTimeContext) => Result;
    /**
     * Visit a parse tree produced by the `localTime`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalTime?: (ctx: LocalTimeContext) => Result;
    /**
     * Visit a parse tree produced by the `currentUser`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentUser?: (ctx: CurrentUserContext) => Result;
    /**
     * Visit a parse tree produced by the `jsonQuery`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJsonQuery?: (ctx: JsonQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `measure`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMeasure?: (ctx: MeasureContext) => Result;
    /**
     * Visit a parse tree produced by the `extract`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract?: (ctx: ExtractContext) => Result;
    /**
     * Visit a parse tree produced by the `stringLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `arrayConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `currentTimestamp`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentTimestamp?: (ctx: CurrentTimestampContext) => Result;
    /**
     * Visit a parse tree produced by the `currentSchema`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentSchema?: (ctx: CurrentSchemaContext) => Result;
    /**
     * Visit a parse tree produced by the `exists`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExists?: (ctx: ExistsContext) => Result;
    /**
     * Visit a parse tree produced by the `position`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPosition?: (ctx: PositionContext) => Result;
    /**
     * Visit a parse tree produced by the `listagg`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListagg?: (ctx: ListaggContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCase`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `currentCatalog`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentCatalog?: (ctx: CurrentCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `groupingOperation`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingOperation?: (ctx: GroupingOperationContext) => Result;
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
     * Visit a parse tree produced by the `arrayType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayType?: (ctx: ArrayTypeContext) => Result;
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
     * Visit a parse tree produced by the `genericType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericType?: (ctx: GenericTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `dateTimeType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateTimeType?: (ctx: DateTimeTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `legacyMapType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLegacyMapType?: (ctx: LegacyMapTypeContext) => Result;
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
     * Visit a parse tree produced by `TrinoSQLParser.updateAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;
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
     * Visit a parse tree produced by `TrinoSQLParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

